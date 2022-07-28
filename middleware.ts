// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    
    const { cookies }  = request

    const jwt = cookies.get('OursiteJWT')

    if (request.nextUrl.pathname.startsWith('/')
        && !request.nextUrl.pathname.includes('/register')
        && !request.nextUrl.pathname.includes('/dashboard')
    ) {

        if (jwt) {
            return NextResponse.redirect(new URL('/dashboard/market/order-book', request.url))
        } 

    }

    if(request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!jwt) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }



}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/signin/:path*', '/dashboard/:path*'],
}