'use client'

import { useState } from 'react'
import styles from './nav.module.css'
import Image from "next/image";
import LoginButton from './LoginButton';

const Nav = () => {
  const [open, setOpen] = useState(false)


  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <section className={styles.logo}>
          <Image
            src={`/icons/logo.svg`}
            width={32}
            height={32}
            alt='logo'
          />
          <p>UltraTweaks</p>
        </section>
        
        <div
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(prev => !prev)}
        >
          <span />
          <span />
        </div>

        {/* <ul className={`${styles.ul} ${open ? styles.open : ''}`}>
          <li className={styles.li}><Link offset={-110} className={styles.link} smooth={true} duration={300} to='speed'>Prędkość</Link></li>
          <li className={styles.li}><Link offset={-110} className={styles.link} smooth={true} duration={300} to='for'>Dla kogo</Link></li>
          <li className={styles.li}><Link offset={-110} className={styles.link} smooth={true} duration={300} to='benefits'>Przewagi</Link></li>
          <li className={styles.mobileBtn}>
            <Button action={handleClick} text="Dołącz" />
          </li>
        </ul> */}

        <div className={styles.desktopBtn}>
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default Nav