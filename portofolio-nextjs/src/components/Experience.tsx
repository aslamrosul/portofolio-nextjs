import styles from '@/styles/Experience.module.css'

interface ExperienceProps {
  data: Array<{
    id: number
    period: string
    institution: string
    position: string
    description: string
  }>
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section className="section-container" id="experience">
      <h2 className="section-title" data-fade>
        <span>02.</span> Edukasi & Pengalaman
      </h2>
      <div className={styles.timeline} data-fade>
        {data.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>{exp.period}</div>
            <div className={styles.timelineContent}>
              <h3>{exp.institution}</h3>
              <h4>{exp.position}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
