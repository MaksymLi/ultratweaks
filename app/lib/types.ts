import { ObjectId } from "mongodb"

export interface IUser {
  _id?: ObjectId
  email: string
  name: string | null
  avatar: string | null
  createdAt: Date
  lastLogin?: Date
}


