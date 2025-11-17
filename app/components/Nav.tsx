'use client'

import { useEffect, useState } from 'react'
import styles from './nav.module.css'
import Image from "next/image";
import LoginButton from './LoginButton';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname, useSearchParams } from 'next/navigation';

const Nav = () => {
  const { data: session, status } = useSession()
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const hash = window.location.hash; 
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      {/* Desktop Navigation */}
      <div className={`container ${styles.container} ${styles.desktop}`}>
        <Link className={styles.link} href={'/'}>
          <Image
            src={`/icons/logo.svg`}
            width={32}
            height={32}
            alt='logo'
          />
          <p className={styles.logo}>UltraTweaks</p>
        </Link>

        <Link className={styles.link} href="/#features">Features</Link>
        <Link className={styles.link} href="/#pricing">Pricing</Link>
        <Link className={styles.link} href="/#about">About</Link>
        <Link className={styles.link} href="/#safety">Safety</Link>

        {status === 'authenticated' && session.user.image && session.user.name ? (
          <Link href={'/dashboard'} className={styles.link}>
            <Image
              src={session.user.image}
              width={48}
              height={48}
              alt='user avatar'
              className={styles.avatar}
            />
            <p className={styles.name}>{session.user.name}</p>
          </Link>
        ) : (
          <div style={{marginLeft: "auto"}}>
            <LoginButton />
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className={`container ${styles.container} ${styles.mobile}`}>
        <section className={styles.head}>
          <Link className={styles.link} href={'/'}>
            <Image
              src={`/icons/logo.svg`}
              width={32}
              height={32}
              alt='logo'
            />
            <p className={styles.logo}>UltraTweaks</p>
          </Link>

          <button className={`${styles.burger} ${open ? styles.open : ""}`} onClick={() => setOpen(prev => !prev)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
        </section>
        <section className={`${styles.menu} ${open ? styles.open : ""}`}>
          <Link className={styles.link} href="/#features">Features</Link>
          <Link className={styles.link} href="/#pricing">Pricing</Link>
          <Link className={styles.link} href="/#about">About</Link>
          <Link className={styles.link} href="/#safety">Safety</Link>

          {status === 'authenticated' && session.user.image && session.user.name ? (
            <Link href={'/dashboard'} className={styles.link}>
              <Image
                src={session.user.image}
                width={48}
                height={48}
                alt='user avatar'
                className={styles.avatar}
              />
              <p className={styles.name}>{session.user.name}</p>
            </Link>
          ) : (
            <div style={{marginLeft: "auto"}}>
              <LoginButton />
            </div>
          )}
        </section>
      </div>
    </nav>
  )
}

export default Nav
