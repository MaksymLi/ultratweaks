"use client"

import { signIn } from "next-auth/react"

const SignIn = () => {
  const callbackUrl = "/"

  return (
    <main>
      <h1>Sign in</h1>
      <p>Choose a provider to continue</p>

      <button onClick={() => signIn("google", { callbackUrl })}>
        Sign in with Google
      </button>
      <button onClick={() => signIn("github", { callbackUrl })}>
        Sign in with GitHub
      </button>
      <button onClick={() => signIn("discord", { callbackUrl })}>
        Sign in with Discord
      </button>
    </main>
  )
}

export default SignIn