import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>
        I’m a Computer Science graduate from South Africa with a deep interest in full-stack development, currently learning through The Odin Project.  
        I love working with React, Node.js, and Docker — building meaningful, scalable apps with clean, maintainable code.  
        I’m also into music, especially rap, and enjoy the creative process as much as the technical one.
      </p>
    </section>
  )
}
