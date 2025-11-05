/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
  }

  interface Session {
    user: {
      id: string      // <--- добавили id
      name: string | null
      email: string | null
      image: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}
