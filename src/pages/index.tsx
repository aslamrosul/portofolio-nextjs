import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import { prisma } from '@/lib/prisma'

interface HomeProps {
  portfolioData: any
}

export default function Home({ portfolioData }: HomeProps) {
  useEffect(() => {
    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('[data-fade]')
    
    if ('IntersectionObserver' in window) {
      const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            fadeObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })

      fadeElements.forEach(el => fadeObserver.observe(el))
    }
  }, [])

  return (
    <>
      <Head>
        <title>{portfolioData.hero.name} - Web Developer & Security Enthusiast</title>
        <meta name="description" content={`Portfolio ${portfolioData.hero.name} - ${portfolioData.hero.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar cvUrl={portfolioData.settings.cvUrl} />
      <SocialSidebar social={portfolioData.social} />
      
      <main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Contact data={portfolioData.contact} />
      </main>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from PostgreSQL via Prisma
    const [hero, about, experience, featuredProjects, otherProjects, contact, social, settings] = await Promise.all([
      prisma.hero.findFirst({ include: { roles: { orderBy: { order: 'asc' } } } }),
      prisma.about.findFirst(),
      prisma.experience.findMany({ orderBy: { order: 'asc' } }),
      prisma.featuredProject.findMany({ orderBy: { order: 'asc' } }),
      prisma.otherProject.findMany({ orderBy: { order: 'asc' } }),
      prisma.contact.findFirst(),
      prisma.social.findFirst(),
      prisma.settings.findFirst()
    ])

    // Format data to match frontend structure
    const portfolioData = {
      hero: {
        intro: hero?.intro || 'Halo, nama saya',
        name: hero?.name || 'Your Name',
        roles: hero?.roles.map((r: any) => r.text) || ['Web Developer.'],
        description: hero?.description || 'Your description here.'
      },
      about: {
        text: about?.text || 'About text here.',
        image: about?.image || '/profil.jpg'
      },
      experience: experience.map((exp: any) => ({
        id: exp.id,
        period: exp.period,
        institution: exp.institution,
        position: exp.position,
        description: exp.description
      })),
      projects: {
        featured: featuredProjects.map((proj: any) => ({
          id: proj.id,
          label: proj.label,
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          github: proj.github,
          demo: proj.demo,
          image: proj.image,
          imageUrl: proj.imageUrl
        })),
        other: otherProjects.map((proj: any) => ({
          id: proj.id,
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          github: proj.github
        }))
      },
      contact: {
        text: contact?.text || 'Contact text here.',
        email: contact?.email || 'your@email.com'
      },
      social: {
        github: social?.github || 'https://github.com',
        linkedin: social?.linkedin || 'https://linkedin.com',
        email: social?.email || 'your@email.com'
      },
      settings: {
        cvUrl: settings?.cvUrl || '/cv.pdf',
        theme: {
          accentColor: settings?.accentColor || '#64ffda'
        }
      }
    }

    return {
      props: {
        portfolioData
      }
    }
  } catch (error) {
    console.error('❌ Database error:', error)
    
    // Try to load from static cache file (generated at build time)
    try {
      const fs = require('fs')
      const path = require('path')
      const cachePath = path.join(process.cwd(), 'public', 'portfolio-cache.json')
      
      if (fs.existsSync(cachePath)) {
        const cachedData = JSON.parse(fs.readFileSync(cachePath, 'utf-8'))
        console.log('⚠️ Using build-time cached data (Supabase might be paused)')
        console.log(`📅 Cache generated at: ${cachedData._generated}`)
        
        return {
          props: {
            portfolioData: cachedData
          }
        }
      }
    } catch (cacheError) {
      console.error('❌ Failed to load cache:', cacheError)
    }
    
    // Fallback to empty data if no cache available
    console.log('⚠️ No cache available, using fallback data')
    return {
      props: {
        portfolioData: {
          hero: {
            intro: 'Halo, nama saya',
            name: 'Your Name',
            roles: ['Web Developer.'],
            description: 'Please run database setup.'
          },
          about: {
            text: 'Please run database setup.',
            image: '/profil.jpg'
          },
          experience: [],
          projects: {
            featured: [],
            other: []
          },
          contact: {
            text: 'Please run database setup.',
            email: 'your@email.com'
          },
          social: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            email: 'your@email.com'
          },
          settings: {
            cvUrl: '/cv.pdf',
            theme: {
              accentColor: '#64ffda'
            }
          }
        }
      }
    }
  }
}

