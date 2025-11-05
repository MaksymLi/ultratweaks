"use client"

import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <main>
      <h1>Are you sure?</h1>

      <button onClick={() => signOut({ callbackUrl: "/" })}>
        Sign Out
      </button>
    </main>
  )
}

export default SignOut