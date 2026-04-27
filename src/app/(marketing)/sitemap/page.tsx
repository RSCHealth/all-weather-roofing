import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES, CITIES, RESOURCE_LINKS } from "@/lib/navigation";
import { listPublishedPosts } from "@/content/blog";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap | All Weather Roofing Systems",
  description:
    "All pages on the All Weather Roofing Systems website organized by category — services, service areas, blog posts, and resources.",
  canonical: "/sitemap",
});

const CORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/free-estimate", label: "Free Estimate / Callback" },
  { href: "/financing", label: "Financing" },
  { href: "/roofing-cost-guide", label: "St. Louis Roofing Cost Guide" },
];

const HUB_LINKS = [
  { href: "/services", label: "All services" },
  { href: "/service-areas", label: "All service areas" },
  { href: "/blog", label: "Blog hub" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-heading text-h3 font-bold text-storm-navy">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {children}
      </ul>
    </section>
  );
}

function Item({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-medium text-storm-navy underline-offset-4 hover:text-signal-amber hover:underline"
      >
        {label}
      </Link>
      <span className="ml-2 text-xs text-slate-500">{href}</span>
    </li>
  );
}

export default function HtmlSitemapPage() {
  const posts = listPublishedPosts();

  return (
    <>
      <div className="bg-hearthstone">
        <div className="mx-auto max-w-4xl px-6 pt-6">
          <Breadcrumb items={[{ label: "Sitemap" }]} />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl">
            Sitemap
          </h1>
          <p className="mt-3 text-base text-slate-700">
            Every page on the All Weather Roofing Systems website, organized
            by category. The XML version for search engines is at{" "}
            <Link
              href="/sitemap.xml"
              className="font-semibold text-signal-amber underline-offset-4 hover:underline"
            >
              /sitemap.xml
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
        <Group title="Core pages">
          {CORE_LINKS.map((link) => (
            <Item key={link.href} {...link} />
          ))}
        </Group>

        <Group title="Hubs">
          {HUB_LINKS.map((link) => (
            <Item key={link.href} {...link} />
          ))}
        </Group>

        <Group title="Services">
          {SERVICES.map((s) => (
            <Item
              key={s.slug}
              href={`/services/${s.slug}`}
              label={s.label}
            />
          ))}
        </Group>

        <Group title="Service areas">
          {CITIES.map((c) => (
            <Item
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              label={c.label}
            />
          ))}
        </Group>

        <Group title="Blog posts">
          {posts.map((p) => (
            <Item
              key={p.frontmatter.slug}
              href={`/blog/${p.frontmatter.slug}`}
              label={p.frontmatter.title}
            />
          ))}
        </Group>

        <Group title="Resources">
          {RESOURCE_LINKS.filter(
            (l) => l.href !== "/sitemap" && l.href !== "/privacy-policy" && l.href !== "/terms-of-service",
          ).map((link) => (
            <Item key={link.href} {...link} />
          ))}
        </Group>

        <Group title="Legal">
          {LEGAL_LINKS.map((link) => (
            <Item key={link.href} {...link} />
          ))}
        </Group>
      </div>
    </>
  );
}
