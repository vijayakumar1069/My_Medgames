// app/actions/sessionFun.ts
"use server"

import { auth } from "@/lib/auth"
import { cache } from "react"

export const getSession = cache(async () => {
  const session = await auth()

  if (!session) {
    return null
  }

  return session?.user
})

export const requireAuth = async () => {
  const session = await getSession()
  
  if (!session) {
    throw new Error('Unauthorized')
  }

  return session
}
