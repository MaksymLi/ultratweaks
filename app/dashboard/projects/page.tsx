import Projects from "@/app/components/Projects";
import styles from "../page.module.css";

export default async function ProjectsPage() {

  return (
    <main className={`container ${styles.df}`}>
      <h1 className={styles.heading}>Your projects</h1>
      <Projects />
    </main>
  )
}
