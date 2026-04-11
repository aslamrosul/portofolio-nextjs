import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Fetch all data from database
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
      const data = {
        hero: {
          intro: hero?.intro || '',
          name: hero?.name || '',
          roles: hero?.roles.map((r: any) => r.text) || [],
          description: hero?.description || ''
        },
        about: {
          text: about?.text || '',
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
            image: proj.image
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
          text: contact?.text || '',
          email: contact?.email || ''
        },
        social: {
          github: social?.github || '',
          linkedin: social?.linkedin || '',
          email: social?.email || ''
        },
        settings: {
          cvUrl: settings?.cvUrl || '/cv.pdf',
          theme: {
            accentColor: settings?.accentColor || '#64ffda'
          }
        }
      }

      res.status(200).json(data)
    } catch (error) {
      console.error('❌ Database error:', error)
      
      // Try to load from static cache file (generated at build time)
      try {
        const cachePath = path.join(process.cwd(), 'public', 'portfolio-cache.json')
        if (fs.existsSync(cachePath)) {
          const cachedData = JSON.parse(fs.readFileSync(cachePath, 'utf-8'))
          console.log('⚠️ Using build-time cached data (Supabase might be paused)')
          return res.status(200).json(cachedData)
        }
      } catch (cacheError) {
        console.error('❌ Failed to load cache:', cacheError)
      }
      
      res.status(500).json({ error: 'Failed to fetch data and no cache available' })
    }
  } else if (req.method === 'POST') {
    try {
      const newData = req.body

      // Update Hero
      const existingHero = await prisma.hero.findFirst()
      if (existingHero) {
        await prisma.hero.update({
          where: { id: existingHero.id },
          data: {
            intro: newData.hero.intro,
            name: newData.hero.name,
            description: newData.hero.description
          }
        })

        // Delete old roles and create new ones
        await prisma.role.deleteMany({ where: { heroId: existingHero.id } })
        await prisma.role.createMany({
          data: newData.hero.roles.map((role: string, index: number) => ({
            text: role,
            order: index,
            heroId: existingHero.id
          }))
        })
      }

      // Update About
      const existingAbout = await prisma.about.findFirst()
      if (existingAbout) {
        await prisma.about.update({
          where: { id: existingAbout.id },
          data: {
            text: newData.about.text,
            image: newData.about.image
          }
        })
      }

      // Update Experience - delete all and recreate
      await prisma.experience.deleteMany()
      await prisma.experience.createMany({
        data: newData.experience.map((exp: any, index: number) => ({
          period: exp.period,
          institution: exp.institution,
          position: exp.position,
          description: exp.description,
          order: index
        }))
      })

      // Update Featured Projects - delete all and recreate
      await prisma.featuredProject.deleteMany()
      await prisma.featuredProject.createMany({
        data: newData.projects.featured.map((proj: any, index: number) => ({
          label: proj.label,
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          github: proj.github,
          demo: proj.demo || null,
          image: proj.image,
          order: index
        }))
      })

      // Update Other Projects - delete all and recreate
      await prisma.otherProject.deleteMany()
      await prisma.otherProject.createMany({
        data: newData.projects.other.map((proj: any, index: number) => ({
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          github: proj.github,
          order: index
        }))
      })

      // Update Contact
      const existingContact = await prisma.contact.findFirst()
      if (existingContact) {
        await prisma.contact.update({
          where: { id: existingContact.id },
          data: {
            text: newData.contact.text,
            email: newData.contact.email
          }
        })
      }

      // Update Social
      const existingSocial = await prisma.social.findFirst()
      if (existingSocial) {
        await prisma.social.update({
          where: { id: existingSocial.id },
          data: {
            github: newData.social.github,
            linkedin: newData.social.linkedin,
            email: newData.social.email
          }
        })
      }

      // Update Settings
      const existingSettings = await prisma.settings.findFirst()
      if (existingSettings) {
        await prisma.settings.update({
          where: { id: existingSettings.id },
          data: {
            cvUrl: newData.settings.cvUrl,
            accentColor: newData.settings.theme.accentColor
          }
        })
      }

      res.status(200).json({ message: 'Data updated successfully' })
    } catch (error) {
      console.error('Error updating data:', error)
      res.status(500).json({ error: 'Failed to update data' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
