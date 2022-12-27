import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|fonts|examples|.*/img).*)"],
};

export default function middleware(req: NextRequest): NextResponse | undefined {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "localhost";
  const path = url.pathname;

  // Map custom domain to the /app/sites/:siteName/ directory.
  const siteName = hostname === "foo.flxwebsites.com" ? "foo" : "";

  if (siteName) {
    return NextResponse.rewrite(new URL(`/sites/${siteName}${path}`, req.url));
  }
}
