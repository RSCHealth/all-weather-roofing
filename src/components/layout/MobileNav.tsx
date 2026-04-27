"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BusinessHoursBadge } from "@/components/cta/BusinessHoursBadge";
import { CallbackForm } from "@/components/forms/CallbackForm";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, CITIES, PRIMARY_NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const [callbackExpanded, setCallbackExpanded] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Basic focus trap: when focus leaves the drawer, return it to the close button.
  const handleFocusOut = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!drawerRef.current) return;
    const next = e.relatedTarget as Node | null;
    if (next && drawerRef.current.contains(next)) return;
    closeButtonRef.current?.focus();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        className={cn(
          "absolute inset-0 bg-slate-900/50 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!open}
        onBlur={handleFocusOut}
        className={cn(
          "absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <Logo size="sm" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-md text-storm-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            aria-label="Close menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Phone CTA + hours, before any nav links */}
        <div className="flex flex-col gap-2 border-b border-slate-200 p-4">
          <PhoneLink
            variant="button"
            size="lg"
            trackingLocation="mobile_nav_top"
            label={`Call ${BUSINESS.phone}`}
            className="w-full"
          />
          <BusinessHoursBadge className="self-center" />
        </div>

        <nav className="flex-1 overflow-y-auto p-2" aria-label="Mobile">
          <NavSection
            title="Services"
            seeAllHref="/services"
            items={SERVICES.map((s) => ({
              href: `/services/${s.slug}`,
              label: s.label,
            }))}
            onClose={onClose}
          />
          <NavSection
            title="Service Areas"
            seeAllHref="/service-areas"
            items={CITIES.map((c) => ({
              href: `/service-areas/${c.slug}`,
              label: c.label,
            }))}
            onClose={onClose}
          />
          <ul className="mt-2 border-t border-slate-200 pt-2">
            {PRIMARY_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} aria-hidden="true" className="text-slate-400" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 p-4">
          {callbackExpanded ? (
            <CallbackForm compact className="w-full" />
          ) : (
            <button
              type="button"
              onClick={() => setCallbackExpanded(true)}
              className="inline-flex w-full min-h-12 items-center justify-center rounded-md border-2 border-storm-navy px-6 text-base font-semibold text-storm-navy transition-colors hover:bg-storm-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2"
            >
              Request a callback
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function NavSection({
  title,
  items,
  seeAllHref,
  onClose,
}: {
  title: string;
  items: { href: string; label: string }[];
  seeAllHref: string;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="mt-1">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-semibold text-storm-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
      >
        <span>{title}</span>
        <ChevronRight
          size={16}
          aria-hidden="true"
          className={cn(
            "text-slate-400 transition-transform",
            expanded && "rotate-90",
          )}
        />
      </button>
      {expanded ? (
        <ul className="mt-1 ml-2 border-l border-slate-200 pl-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={seeAllHref}
              onClick={onClose}
              className="block rounded-md px-3 py-2 text-sm font-semibold text-signal-amber hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            >
              See all →
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default MobileNav;
