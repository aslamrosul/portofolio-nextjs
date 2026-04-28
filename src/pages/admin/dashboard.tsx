import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@/styles/Admin.module.css'

interface PortfolioData {
  hero: any
  about: any
  experience: Experience[]
  projects: ProjectsSection
  contact: any
  social: any
  settings: any
}
interface Project {
  id: number
  label?: string
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  image?: string
  imageUrl?: string
}

interface ProjectsSection {
  featured: Project[]
  other: Project[]
}

interface Experience {
  id: number
  period: string
  institution: string
  position: string
  description: string
}
export default function AdminDashboard() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState('hero')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('/api/portfolio')
      const portfolioData: PortfolioData = await res.json()
      
      // Convert null values to empty strings for form inputs
      const cleanedData = {
        ...portfolioData,
        projects: {
          featured: portfolioData.projects.featured.map(proj => ({
            ...proj,
            demo: proj.demo || '',
            imageUrl: proj.imageUrl || ''
          })),
          other: portfolioData.projects.other
        }
      }
      
      setData(cleanedData)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage('')

    try {
      if (!data) return

      // Validate required fields
      if (!data.hero.name || !data.hero.intro) {
        setMessage('❌ Hero name dan intro harus diisi')
        setSaving(false)
        return
      }

      if (data.projects.featured.some(p => !p.title || !p.github || !p.image)) {
        setMessage('❌ Semua featured project harus punya title, github, dan image')
        setSaving(false)
        return
      }

      // Validate and clean data before sending
      const cleanData = {
        ...data,
        projects: {
          featured: data.projects.featured.map(proj => ({
            ...proj,
            demo: proj.demo && proj.demo.trim() !== '' ? proj.demo.trim() : null,
            imageUrl: proj.imageUrl && proj.imageUrl.trim() !== '' ? proj.imageUrl.trim() : null,
            technologies: proj.technologies.filter(t => t && t.trim() !== '')
          })),
          other: data.projects.other.map(proj => ({
            ...proj,
            technologies: proj.technologies.filter(t => t && t.trim() !== '')
          }))
        }
      }

      console.log('Sending data:', cleanData)

      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanData)
      })

      const result = await res.json()
      console.log('Response:', result)

      if (res.ok) {
        setMessage('✅ Data berhasil disimpan!')
        setTimeout(() => setMessage(''), 3000)
        // Refresh data after save
        fetchData()
      } else {
        setMessage(`❌ Gagal: ${result.details || result.error || 'Unknown error'}`)
        console.error('Save error:', result)
      }
    } catch (error) {
      console.error('Save exception:', error)
      setMessage(`❌ Error: ${error instanceof Error ? error.message : 'Unknown'}`)
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (!data) {
    return <div className={styles.error}>Failed to load data</div>
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - Portfolio</title>
      </Head>
      <div className={styles.dashboard}>
        <header className={styles.dashboardHeader}>
          <h1>Portfolio Admin Dashboard</h1>
          <div className={styles.headerActions}>
            <a href="/" target="_blank" className={styles.previewButton}>
              👁️ Preview Site
            </a>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        </header>

        <div className={styles.dashboardContent}>
          <nav className={styles.sidebar}>
            <button
              className={activeTab === 'hero' ? styles.active : ''}
              onClick={() => setActiveTab('hero')}
            >
              🏠 Hero Section
            </button>
            <button
              className={activeTab === 'about' ? styles.active : ''}
              onClick={() => setActiveTab('about')}
            >
              👤 About
            </button>
            <button
              className={activeTab === 'experience' ? styles.active : ''}
              onClick={() => setActiveTab('experience')}
            >
              🎓 Experience
            </button>
            <button
              className={activeTab === 'projects' ? styles.active : ''}
              onClick={() => setActiveTab('projects')}
            >
              💼 Projects
            </button>
            <button
              className={activeTab === 'contact' ? styles.active : ''}
              onClick={() => setActiveTab('contact')}
            >
              📧 Contact
            </button>
            <button
              className={activeTab === 'social' ? styles.active : ''}
              onClick={() => setActiveTab('social')}
            >
              🔗 Social Media
            </button>
            <button
              className={activeTab === 'settings' ? styles.active : ''}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
            </button>
          </nav>

          <main className={styles.mainContent}>
            {message && <div className={styles.message}>{message}</div>}

            {/* Hero Section */}
            {activeTab === 'hero' && (
              <div className={styles.section}>
                <h2>Hero Section</h2>
                <div className={styles.formGroup}>
                  <label>Intro Text</label>
                  <input
                    type="text"
                    value={data.hero.intro}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, intro: e.target.value } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Nama</label>
                  <input
                    type="text"
                    value={data.hero.name}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, name: e.target.value } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Roles (satu per baris)</label>
                  <textarea
                    rows={4}
                    value={data.hero.roles.join('\n')}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, roles: e.target.value.split('\n') } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Deskripsi</label>
                  <textarea
                    rows={4}
                    value={data.hero.description}
                    onChange={(e) => setData({ ...data, hero: { ...data.hero, description: e.target.value } })}
                  />
                </div>
              </div>
            )}

            {/* About Section */}
            {activeTab === 'about' && (
              <div className={styles.section}>
                <h2>About Section</h2>
                <div className={styles.formGroup}>
                  <label>Tentang Diri</label>
                  <textarea
                    rows={8}
                    value={data.about.text}
                    onChange={(e) => setData({ ...data, about: { ...data.about, text: e.target.value } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Foto Profil Path</label>
                  <input
                    type="text"
                    value={data.about.image}
                    onChange={(e) => setData({ ...data, about: { ...data.about, image: e.target.value } })}
                  />
                  <small>Upload foto ke folder public/ lalu masukkan path (contoh: /profil.jpg)</small>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeTab === 'experience' && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h2>Experience</h2>
                  <button
                    onClick={() => {
                      const newExp = [...data.experience, {
                        id: Date.now(),
                        period: '',
                        institution: '',
                        position: '',
                        description: ''
                      }]
                      setData({ ...data, experience: newExp })
                    }}
                    className={styles.addButton}
                  >
                    ➕ Tambah Experience
                  </button>
                </div>
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3>Experience #{index + 1}</h3>
                      <button
                        onClick={() => {
                          const newExp = data.experience.filter((_, i) => i !== index)
                          setData({ ...data, experience: newExp })
                        }}
                        className={styles.deleteButton}
                      >
                        🗑️ Hapus
                      </button>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Periode</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const newExp = [...data.experience]
                          newExp[index].period = e.target.value
                          setData({ ...data, experience: newExp })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Institusi</label>
                      <input
                        type="text"
                        value={exp.institution}
                        onChange={(e) => {
                          const newExp = [...data.experience]
                          newExp[index].institution = e.target.value
                          setData({ ...data, experience: newExp })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Posisi</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => {
                          const newExp = [...data.experience]
                          newExp[index].position = e.target.value
                          setData({ ...data, experience: newExp })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Deskripsi</label>
                      <textarea
                        rows={3}
                        value={exp.description}
                        onChange={(e) => {
                          const newExp = [...data.experience]
                          newExp[index].description = e.target.value
                          setData({ ...data, experience: newExp })
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Projects Section */}
            {activeTab === 'projects' && (
              <div className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h2>Featured Projects</h2>
                  <button
                    onClick={() => {
                      const newProjects = { ...data.projects }
                      newProjects.featured.push({
                        id: Date.now(),
                        label: '',
                        title: '',
                        description: '',
                        technologies: [],
                        github: '',
                        demo: '',
                        image: '/project1.jpg',
                        imageUrl: ''
                      })
                      setData({ ...data, projects: newProjects })
                    }}
                    className={styles.addButton}
                  >
                    ➕ Tambah Featured Project
                  </button>
                </div>
                {data.projects.featured.map((project, index) => (
                  <div key={project.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3>{project.title || `Featured Project #${index + 1}`}</h3>
                      <button
                        onClick={() => {
                          const newProjects = { ...data.projects }
                          newProjects.featured = newProjects.featured.filter((_, i) => i !== index)
                          setData({ ...data, projects: newProjects })
                        }}
                        className={styles.deleteButton}
                      >
                        🗑️ Hapus
                      </button>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Label</label>
                      <input
                        type="text"
                        value={project.label}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].label = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].title = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Deskripsi</label>
                      <textarea
                        rows={4}
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].description = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Technologies (pisahkan dengan koma)</label>
                      <input
                        type="text"
                        value={project.technologies.join(', ')}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].technologies = e.target.value.split(',').map(t => t.trim())
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>GitHub URL</label>
                      <input
                        type="text"
                        value={project.github}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].github = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Image Path</label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].image = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                      <small>Path gambar di folder public/ (contoh: /project1.jpg)</small>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Image URL (Link saat gambar diklik)</label>
                      <input
                        type="text"
                        value={project.imageUrl || ''}
                        placeholder="Kosongkan untuk pakai Demo URL atau GitHub"
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].imageUrl = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                      <small>URL tujuan saat gambar diklik. Kosongkan untuk otomatis pakai Demo URL (jika ada) atau GitHub</small>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Demo URL (Opsional)</label>
                      <input
                        type="text"
                        value={project.demo || ''}
                        placeholder="https://demo.vercel.app"
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.featured[index].demo = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                      <small>Link demo live project (jika ada)</small>
                    </div>
                  </div>
                ))}

                <div className={styles.sectionHeader} style={{ marginTop: '40px' }}>
                  <h2>Other Projects</h2>
                  <button
                    onClick={() => {
                      const newProjects = { ...data.projects }
                      newProjects.other.push({
                        id: Date.now(),
                        title: '',
                        description: '',
                        technologies: [],
                        github: ''
                      })
                      setData({ ...data, projects: newProjects })
                    }}
                    className={styles.addButton}
                  >
                    ➕ Tambah Other Project
                  </button>
                </div>
                {data.projects.other.map((project, index) => (
                  <div key={project.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3>{project.title || `Other Project #${index + 1}`}</h3>
                      <button
                        onClick={() => {
                          const newProjects = { ...data.projects }
                          newProjects.other = newProjects.other.filter((_, i) => i !== index)
                          setData({ ...data, projects: newProjects })
                        }}
                        className={styles.deleteButton}
                      >
                        🗑️ Hapus
                      </button>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.other[index].title = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Deskripsi</label>
                      <textarea
                        rows={3}
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.other[index].description = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Technologies (pisahkan dengan koma)</label>
                      <input
                        type="text"
                        value={project.technologies.join(', ')}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.other[index].technologies = e.target.value.split(',').map(t => t.trim())
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>GitHub URL</label>
                      <input
                        type="text"
                        value={project.github}
                        onChange={(e) => {
                          const newProjects = { ...data.projects }
                          newProjects.other[index].github = e.target.value
                          setData({ ...data, projects: newProjects })
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Section */}
            {activeTab === 'contact' && (
              <div className={styles.section}>
                <h2>Contact Section</h2>
                <div className={styles.formGroup}>
                  <label>Contact Text</label>
                  <textarea
                    rows={4}
                    value={data.contact.text}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, text: e.target.value } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={data.contact.email}
                    onChange={(e) => setData({ ...data, contact: { ...data.contact, email: e.target.value } })}
                  />
                </div>
              </div>
            )}

            {/* Social Media */}
            {activeTab === 'social' && (
              <div className={styles.section}>
                <h2>Social Media Links</h2>
                <div className={styles.formGroup}>
                  <label>GitHub</label>
                  <input
                    type="text"
                    value={data.social.github}
                    onChange={(e) => setData({ ...data, social: { ...data.social, github: e.target.value } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>LinkedIn</label>
                  <input
                    type="text"
                    value={data.social.linkedin}
                    onChange={(e) => setData({ ...data, social: { ...data.social, linkedin: e.target.value } })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    value={data.social.email}
                    onChange={(e) => setData({ ...data, social: { ...data.social, email: e.target.value } })}
                  />
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className={styles.section}>
                <h2>Settings</h2>
                <div className={styles.formGroup}>
                  <label>CV URL</label>
                  <input
                    type="text"
                    value={data.settings.cvUrl}
                    onChange={(e) => setData({ ...data, settings: { ...data.settings, cvUrl: e.target.value } })}
                  />
                  <small>Upload CV ke folder public/ lalu masukkan path (contoh: /cv.pdf)</small>
                </div>
                <div className={styles.formGroup}>
                  <label>Accent Color</label>
                  <input
                    type="color"
                    value={data.settings.theme.accentColor}
                    onChange={(e) => setData({ ...data, settings: { ...data.settings, theme: { ...data.settings.theme, accentColor: e.target.value } } })}
                  />
                  <small>Warna aksen untuk tema portfolio</small>
                </div>
              </div>
            )}

            <div className={styles.saveSection}>
              <button
                onClick={handleSave}
                className={styles.saveButton}
                disabled={saving}
              >
                {saving ? 'Menyimpan...' : '💾 Simpan Perubahan'}
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
