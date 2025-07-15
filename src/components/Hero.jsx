import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Hi, I'm Sibonginhlanhla</h1>
      <p className={styles.subtitle}>Computer Science Graduate · Aspiring Full-Stack Developer</p>
      <div className={styles.links}>
        <a href="https://github.com/Sibonginhlanhla" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/sibonginhlanhla-magwaza-ab662b282" target="_blank">LinkedIn</a>
      </div>
    </section>
  )
}
