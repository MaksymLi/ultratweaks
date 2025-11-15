"use client"

import { signOut } from "next-auth/react"
import styles from "./auth.module.css"
import Button from "./Button"

const SignOut = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Are you sure?</h1>

      <Button text="Sign Out" action={() => signOut({ callbackUrl: "/" })} />
    </main>
  )
}

export default SignOut