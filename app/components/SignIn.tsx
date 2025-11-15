"use client"

import { signIn } from "next-auth/react"
import styles from "./auth.module.css"
import Image from "next/image"

const SignIn = () => {
  const callbackUrl = "/"

  return (
    <main className={styles.main}>
      <h1>Sign in</h1>

      <button onClick={() => signIn("google", { callbackUrl })} className={styles.button}>
        <Image 
          src="/icons/bxl_google.svg" 
          alt="Google Logo" 
          width={24} 
          height={24}
        />
        Sign in with Google
      </button>
      <button onClick={() => signIn("discord", { callbackUrl })} className={styles.button}>
        <Image 
          src="/icons/bxl_discord-alt.svg" 
          alt="Discord Logo" 
          width={24} 
          height={24}
        />
        Sign in with Discord
      </button>
    </main>
  )
}

export default SignIn