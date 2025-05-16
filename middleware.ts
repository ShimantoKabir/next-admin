import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware executed...!");
  // const accessToken: string | null = localStorage.getItem("access-token");
  // console.log("access-token=", accessToken);

  //return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/dashboard", "/registration"],
};
