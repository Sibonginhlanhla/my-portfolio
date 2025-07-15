import styles from '../styles/Skills.module.css'
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiGit,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skills = [
  { name: 'Python', icon: <SiPython color="#F7DF1E" /> }, // yellow
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599C" /> }, // blue
  { name: 'Java', icon: <FaJava color="#f89820" /> }, // orange
  { name: 'SQL', icon: <SiMysql color="#4479A1" /> }, // blue
  { name: 'React', icon: <SiReact color="#61DBFB" /> }, // cyan
  { name: 'Node.js', icon: <SiNodedotjs color="#68A063" /> }, // green
  { name: 'Docker', icon: <SiDocker color="#0db7ed" /> }, // blue
  { name: 'Git', icon: <SiGit color="#F1502F" /> }, // red
]

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {skills.map(({ name, icon }) => (
          <div key={name} className={styles.skillCard} title={name}>
            <div className={styles.icon}>{icon}</div>
            <span className={styles.skillName}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
