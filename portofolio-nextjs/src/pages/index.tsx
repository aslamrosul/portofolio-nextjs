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
import fs from 'fs'
import path from 'path'

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

    // Navbar hide on scroll
    let lastScrollTop = 0
    const navbar = document.querySelector('.navbar')
    const navHeight = 80

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      if (navbar) {
        if (scrollTop > lastScrollTop && scrollTop > navHeight) {
          (navbar as HTMLElement).style.top = `-${navHeight}px`
        } else {
          (navbar as HTMLElement).style.top = '0'
        }
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Aslam Rosul Ahmad - Web Developer & Security Enthusiast</title>
        <meta name="description" content="Portfolio Aslam Rosul Ahmad - Web Developer, Security Enthusiast, Data Analyst" />
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
  const filePath = path.join(process.cwd(), 'src/data/portfolio.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const portfolioData = JSON.parse(fileContents)

  return {
    props: {
      portfolioData
    }
  }
}
