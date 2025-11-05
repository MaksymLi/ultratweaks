"use client"
import { useState } from "react"
import SideBar from "../components/SideBar"
import styles from "./page.module.css"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => setIsCollapsed(prev => !prev)

  return (
    <main className={`${styles.dashboard} ${isCollapsed && styles.collapsed}`}>
      <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      <section className={styles.children}>
        {children}
      </section>
    </main>
  )
}