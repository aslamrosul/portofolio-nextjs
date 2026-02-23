import styles from '@/styles/Contact.module.css'

interface ContactProps {
  data: {
    text: string
    email: string
  }
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className={`section-container ${styles.contactSection}`} id="contact">
      <h2 className="section-title text-center" data-fade>
        <span>04.</span> Hubungi Saya
      </h2>
      <div className={styles.contactContent} data-fade>
        <p className={styles.contactText}>
          {data.text}
        </p>
        <a
          href={`mailto:${data.email}`}
          className={`btn btn-primary ${styles.contactBtn}`}
        >
          Kirim Email
        </a>
      </div>
    </section>
  )
}
