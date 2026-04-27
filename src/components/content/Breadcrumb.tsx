import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${BUSINESS.url}${item.href}` : undefined,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-xs text-slate-500",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx === 0 ? (
                <Home size={12} aria-hidden="true" className="text-slate-400" />
              ) : null}
              {isLast || !item.href ? (
                <span aria-current={isLast ? "page" : undefined} className="text-slate-700">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 underline-offset-2 hover:text-storm-navy hover:underline focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-storm-navy"
                >
                  {item.label}
                </Link>
              )}
              {!isLast ? (
                <ChevronRight
                  size={12}
                  aria-hidden="true"
                  className="text-slate-400"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
}

export default Breadcrumb;
