import Image from 'next/image'
import styles from '@/styles/About.module.css'

interface AboutProps {
  data: {
    text: string
    image: string
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section className="section-container" id="about">
      <h2 className="section-title" data-fade><span>01.</span> Tentang Saya</h2>
      <div className={styles.aboutGrid} data-fade>
        <div className={styles.aboutText}>
          <p>{data.text}</p>
        </div>
        <div className={styles.aboutPhotoContainer}>
          <Image
            className={styles.aboutPhoto}
            src={data.image}
            alt="Foto Profil"
            width={360}
            height={360}
          />
        </div>
      </div>
    </section>
  )
}
