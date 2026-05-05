import { NextResponse, type NextRequest } from "next/server";

/**
 * Hacked-site cleanup. The prior WordPress install was compromised and
 * Google indexed ~3,000 cloaked spam URLs (PHP injection, numeric
 * cloaking IDs, dictionary-attack paths). Returning 410 Gone tells
 * Google to drop them from the index immediately, instead of the slow
 * 404 retry loop. We also send X-Robots-Tag: noindex as belt-and-braces.
 *
 * Patterns are deliberately broad: the new Next.js site has no PHP,
 * no /item(s)/ routes, and no path containing 6+ consecutive digits, so
 * these matchers will not collide with any legitimate URL.
 */
const HACK_PATTERNS: RegExp[] = [
  /\.php$/i,
  /^\/pcmypage$/i,
  /^\/items?\//i,
  /\d{6,}/,
];

const GONE_BODY = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>410 Gone</title>
<meta name="robots" content="noindex" />
</head>
<body>
<h1>410 Gone</h1>
<p>This page no longer exists. Visit our <a href="https://www.allweatherroofingsystems.com/">home page</a> or our <a href="https://www.allweatherroofingsystems.com/services/">services</a>.</p>
</body>
</html>`;

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  for (const pat of HACK_PATTERNS) {
    if (pat.test(path)) {
      return new NextResponse(GONE_BODY, {
        status: 410,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon\\.ico|robots\\.txt|sitemap\\.xml|sitemap-llms\\.xml|llms\\.txt|llms-full\\.txt).*)",
  ],
};
