import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|fonts|examples|.*/img).*)"],
};

export default function middleware({
  headers,
  nextUrl,
}: NextRequest): NextResponse | undefined {
  // Map custom domain to the /app/sites/:siteName/ directory.
  const siteName = headers.get("host") === "foo.flxwebsites.com" ? "foo" : "";

  // Next 13 sometimes appends 'index' to root paths after the page has loaded...
  let pathname = nextUrl.pathname;
  if (nextUrl.pathname === "/index") {
    pathname = "/";
  }

  if (siteName) {
    nextUrl.pathname = `/sites/${siteName}${pathname}`;
    return NextResponse.rewrite(nextUrl);
  }
}
