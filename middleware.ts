import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/sign-up": true,
  "/sign-in": true,
  "/sign-up/email": true,
  "/sign-up/name-password": true,
  "/sign-up/nickname": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  if (!session.id) {
    // Restrict user page access with signin or login
    if (!exists) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  } else {
    if (exists) {
      // With session, no need to login and signin
      return NextResponse.redirect(new URL("/lectures", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};