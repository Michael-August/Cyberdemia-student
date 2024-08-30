import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const token = request.nextauth.token;

    if (!token && pathname.match(/student/)) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    if (token && pathname.match(/signin/)) {
      return NextResponse.redirect(new URL(`/student/home`, request.url));
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
);

export const config = {
  matcher: ['/student/:path*', '/signin'],
};
