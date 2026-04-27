import "dotenv/config";
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Read data from JSON file
  const dataPath = path.join(process.cwd(), 'src/data/portfolio.json')
  const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

  // Clear existing data
  console.log('🗑️  Clearing existing data...')
  await prisma.role.deleteMany()
  await prisma.hero.deleteMany()
  await prisma.about.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.featuredProject.deleteMany()
  await prisma.otherProject.deleteMany()
  await prisma.contact.deleteMany()
  await prisma.social.deleteMany()
  await prisma.settings.deleteMany()

  // Seed Hero
  console.log('📝 Seeding Hero...')
  const hero = await prisma.hero.create({
    data: {
      intro: jsonData.hero.intro,
      name: jsonData.hero.name,
      description: jsonData.hero.description,
      roles: {
        create: jsonData.hero.roles.map((role: string, index: number) => ({
          text: role,
          order: index
        }))
      }
    }
  })
  console.log(`✅ Created hero with ${jsonData.hero.roles.length} roles`)

  // Seed About
  console.log('📝 Seeding About...')
  await prisma.about.create({
    data: {
      text: jsonData.about.text,
      image: jsonData.about.image
    }
  })
  console.log('✅ Created about')

  // Seed Experience
  console.log('📝 Seeding Experience...')
  for (const [index, exp] of jsonData.experience.entries()) {
    await prisma.experience.create({
      data: {
        period: exp.period,
        institution: exp.institution,
        position: exp.position,
        description: exp.description,
        order: index
      }
    })
  }
  console.log(`✅ Created ${jsonData.experience.length} experiences`)

  // Seed Featured Projects
  console.log('📝 Seeding Featured Projects...')
  for (const [index, project] of jsonData.projects.featured.entries()) {
    await prisma.featuredProject.create({
      data: {
        label: project.label,
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        github: project.github,
        demo: project.demo || null,
        image: project.image,
        imageUrl: project.imageUrl || null,
        order: index
      }
    })
  }
  console.log(`✅ Created ${jsonData.projects.featured.length} featured projects`)

  // Seed Other Projects
  console.log('📝 Seeding Other Projects...')
  for (const [index, project] of jsonData.projects.other.entries()) {
    await prisma.otherProject.create({
      data: {
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        github: project.github,
        order: index
      }
    })
  }
  console.log(`✅ Created ${jsonData.projects.other.length} other projects`)

  // Seed Contact
  console.log('📝 Seeding Contact...')
  await prisma.contact.create({
    data: {
      text: jsonData.contact.text,
      email: jsonData.contact.email
    }
  })
  console.log('✅ Created contact')

  // Seed Social
  console.log('📝 Seeding Social...')
  await prisma.social.create({
    data: {
      github: jsonData.social.github,
      linkedin: jsonData.social.linkedin,
      email: jsonData.social.email
    }
  })
  console.log('✅ Created social')

  // Seed Settings
  console.log('📝 Seeding Settings...')
  await prisma.settings.create({
    data: {
      cvUrl: jsonData.settings.cvUrl,
      accentColor: jsonData.settings.theme.accentColor
    }
  })
  console.log('✅ Created settings')

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
