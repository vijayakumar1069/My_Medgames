// middleware.ts
import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
import { authConfig } from './lib/auth.config'
import NextAuth from 'next-auth'

const {auth}=NextAuth(authConfig)

export async function middleware( NextRequest) {
  const session = await auth()
  const pathname = NextRequest.nextUrl.pathname

  // Define protected routes
  const protectedRoutes = [
    '/admin-dashboard',
    '/admin-courses',
    '/admin-tutors',
    '/admin-notifications',
   
  ]

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Redirect logic
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/admin-login', NextRequest.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/admin-dashboard',
    '/admin-courses',
    '/admin-tutors',
    '/admin-notifications',

  ]
}
