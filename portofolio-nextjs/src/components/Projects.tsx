import Image from 'next/image'
import styles from '@/styles/Projects.module.css'

interface ProjectsProps {
  data: {
    featured: Array<{
      id: number
      label: string
      title: string
      description: string
      technologies: string[]
      github: string
      demo?: string
      image: string
    }>
    other: Array<{
      id: number
      title: string
      description: string
      technologies: string[]
      github: string
    }>
  }
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <>
      <section className="section-container" id="projects">
        <h2 className="section-title" data-fade>
          <span>03.</span> Proyek Unggulan
        </h2>

        {data.featured.map((project, index) => (
          <div 
            key={project.id} 
            className={`${styles.projectGrid} ${styles.featured} ${index % 2 === 1 ? styles.reversed : ''}`} 
            data-fade
          >
            <div className={styles.projectContent}>
              <span className={styles.projectLabel}>{project.label}</span>
              <h3 className={styles.projectTitle}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <div className={styles.projectDesc}>
                <p>{project.description}</p>
              </div>
              <ul className={styles.projectTech}>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className={styles.projectImage}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt={`Screenshot ${project.title}`} width={600} height={400} />
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="section-container" id="other-projects">
        <h2 className="section-title text-center" data-fade>Proyek Lainnya</h2>
        <div className={styles.otherProjectsGrid} data-fade>
          {data.other.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <svg className={styles.folderIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className={styles.cardTitle}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <ul className={styles.projectTechSmall}>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
