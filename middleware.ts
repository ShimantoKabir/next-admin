import "reflect-metadata";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { container } from "tsyringe";
import { CookieService } from "./app/utils/cookie/CookieService";
import { CookieServiceImp } from "./app/utils/cookie/CookieServiceImp";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export function middleware(request: NextRequest) {
  const pathname: string = request.nextUrl.pathname;
  const protectedRoutes: string[] = ["/dashboard", "/profile"];
  const unProtectedRoutes: string[] = ["/", "/login", "/registration"];

  const cookieService = container.resolve<CookieService>(CookieServiceImp);
  console.log("Route middleware executed...!");

  const accessTokenCookie: RequestCookie | undefined =
    request.cookies.get("access-token");

  const unProtectedRoute = unProtectedRoutes.find(
    (p: string) => p === pathname
  );

  const protectedRoute = protectedRoutes.find((p: string) => p === pathname);

  if (accessTokenCookie && accessTokenCookie.value && unProtectedRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!accessTokenCookie && protectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/login", "/dashboard", "/registration", "/profile"],
};
