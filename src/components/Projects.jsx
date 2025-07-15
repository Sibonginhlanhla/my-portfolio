import styles from '../styles/Project.module.css'

const projects = [
  {
    name: 'Memory Game',
    description: 'A fun memory matching game built with React and Vite.',
    url: 'https://github.com/Sibonginhlanhla/memory-card',
  },
  {
    name: 'Todo App',
    description: 'Simple task manager using vanilla JavaScript and localStorage.',
    url: 'https://github.com/Sibonginhlanhla/to-do-list',
  },
  {
    name: 'Tic-Tac-Toe',
    description: 'Classic two-player Tic Tac Toe game built with JavaScript.',
    url: 'https://github.com/Sibonginhlanhla/tic-tac-toe',
  },
]

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(({ name, description, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <h3 className={styles.projectTitle}>{name}</h3>
            <p className={styles.projectDesc}>{description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
