import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"
import RedditProvider from "next-auth/providers/reddit"
import clientPromise from "@/app/lib/mongodb"
import { ObjectId } from "mongodb"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID!,
      clientSecret: process.env.REDDIT_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user }) {
      const client = await clientPromise
      const db = client.db("leadsParser")
      const users = db.collection("users")

      await users.findOneAndUpdate(
        { email: user.email },
        {
          $set: {
            name: user.name,
            avatar: user.image,
            lastLogin: new Date()
          },
          $setOnInsert: {
            email: user.email,
            createdAt: new Date()
          }
        },
        { upsert: true, returnDocument: "after" }
      )

      return true
    },

    async jwt({ token }) {
      if (token.id) return token

      const client = await clientPromise
      const db = client.db("akaliz")
      const users = db.collection("users")
      const user = await users.findOne({ email: token.email })

      if (user?._id) token.id = (user._id as ObjectId).toString() 
      return token
    },

    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id 
      }
      return session
    }
  },

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout"
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
