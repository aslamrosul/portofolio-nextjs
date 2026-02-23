import { useEffect } from 'react'
import styles from '@/styles/Hero.module.css'

interface HeroProps {
  data: {
    intro: string
    name: string
    roles: string[]
    description: string
  }
}

export default function Hero({ data }: HeroProps) {
  useEffect(() => {
    // Load Typed.js dynamically
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12'
    script.async = true
    
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).Typed) {
        new (window as any).Typed('.typing-effect', {
          strings: data.roles,
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          startDelay: 500,
          loop: true,
          showCursor: false
        })
      }
    }
    
    document.body.appendChild(script)
    
    return () => {
      document.body.removeChild(script)
    }
  }, [data.roles])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent} data-fade>
        <p className={styles.heroIntro}>{data.intro}</p>
        <h1 className={`${styles.heroName} ${styles.glitch}`} data-text={data.name}>
          {data.name}
        </h1>
        <h2 className={styles.heroSubtitle}>
          Saya <span className="typing-effect"></span>
        </h2>
        <p className={styles.heroDesc}>
          {data.description}
        </p>
        <a href="#contact" className="btn btn-primary">Hubungi Saya</a>
      </div>
      <div className={styles.scanlineEffect}></div>
    </section>
  )
}
