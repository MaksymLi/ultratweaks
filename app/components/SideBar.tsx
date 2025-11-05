"use client"
import { FC } from "react"
import styles from "./sideBar.module.css"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SideBarProps {
  isCollapsed: boolean
  toggleCollapse: () => void
}

const menuItemData = [
  { label: "Overview", icon: "/lucide_layout-dashboard", href: "/dashboard" },
  { label: "Leads", icon: "/lucide_users-round", href: "/dashboard/leads" },
  { label: "Analytics", icon: "/lucide_chart-column", href: "/dashboard/analytics" },
  { label: "Setup", icon: "/lucide_settings", href: "/dashboard/setup" },
  { label: "Billing", icon: "/lucide_wallet", href: "/dashboard/billing" },
  { label: "Sign Out", icon: "/si_sign-out-alt-fill", href: "/auth/signout" },
]

const SideBar: FC<SideBarProps> = ({ isCollapsed, toggleCollapse }) => {
  const pathname = usePathname()

  return (
    <aside className={`${styles.aside} ${isCollapsed ? styles.collapsed : ""}`}>
      <section className={styles.top}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src="/icons/logo.svg"
            width={24}
            height={24}
            alt="logo"
            priority
          />
        </Link>

        <Image
          src="/icons/double_arrow.svg"
          width={24}
          height={24}
          alt="toggle sidebar"
          priority
          className={styles.arrow}
          onClick={toggleCollapse}
        />
      </section>

      <nav className={styles.nav}>
        {menuItemData.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
            >
              <Image
                src={`/icons/${item.icon}.svg`}
                width={24}
                height={24}
                alt={`${item.label} icon`}
                className={styles.menuItemIcon}
              />
              <h2 className={styles.h2}>{item.label}</h2>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default SideBar