import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Let's Connect</h2>
      <p className={styles.text}>
        You can reach me at{' '}
        <a href="mailto:husfa37@gmail.com" className={styles.email}>
          husfa37@gmail.com
        </a>
      </p>
      <p className={styles.text}>
        Or find me on{' '}
        <a
          href="https://linkedin.com/in/sibonginhlanhla-magwaza-ab662b282"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/Sibonginhlanhla"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </p>
    </section>
  )
}
