import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

interface NavbarProps {
  cvUrl: string
}

export default function Navbar({ cvUrl }: NavbarProps) {
  return (
    <header className={`navbar ${styles.navbar}`}>
      <div className={styles.navLogo}>
        <Link href="#">ARA</Link>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#about"><span>01.</span> Tentang</Link>
          </li>
          <li>
            <Link href="#experience"><span>02.</span> Pengalaman</Link>
          </li>
          <li>
            <Link href="#projects"><span>03.</span> Proyek</Link>
          </li>
          <li>
            <Link href="#contact"><span>04.</span> Kontak</Link>
          </li>
        </ul>
      </nav>
      <a href={cvUrl} className="btn" target="_blank">Download CV</a>
    </header>
  )
}
