const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function generateCache() {
  try {
    console.log('🔄 Generating portfolio cache...')

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

    const portfolioData = {
      hero: {
        intro: hero?.intro || 'Halo, nama saya',
        name: hero?.name || 'Your Name',
        roles: hero?.roles.map((r) => r.text) || ['Web Developer.'],
        description: hero?.description || 'Your description here.'
      },
      about: {
        text: about?.text || 'About text here.',
        image: about?.image || '/profil.jpg'
      },
      experience: experience.map((exp) => ({
        id: exp.id,
        period: exp.period,
        institution: exp.institution,
        position: exp.position,
        description: exp.description
      })),
      projects: {
        featured: featuredProjects.map((proj) => ({
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
        other: otherProjects.map((proj) => ({
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
      },
      _generated: new Date().toISOString()
    }

    const cachePath = path.join(process.cwd(), 'public', 'portfolio-cache.json')
    fs.writeFileSync(cachePath, JSON.stringify(portfolioData, null, 2))
    
    console.log('✅ Cache generated successfully at public/portfolio-cache.json')
    console.log(`📅 Generated at: ${portfolioData._generated}`)
  } catch (error) {
    console.error('❌ Failed to generate cache:', error)
    console.log('⚠️  Continuing build without cache...')
  } finally {
    await prisma.$disconnect()
  }
}

generateCache()
