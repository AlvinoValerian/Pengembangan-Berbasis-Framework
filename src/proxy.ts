import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(middleware, ["/profile", "/admin","/editor"]);

export const config = {
  matcher: ["/profile", "/admin","/editor"],
};