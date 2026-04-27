"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { BusinessHoursBadge } from "@/components/cta/BusinessHoursBadge";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, CITIES, PRIMARY_NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type DropdownKey = "services" | "areas" | null;

export function Header() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<DropdownKey>(null);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => setCollapsed(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!openDropdown) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openDropdown]);

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-all",
          collapsed && "shadow-card",
        )}
      >
        {/* Desktop utility row */}
        <div
          className={cn(
            "hidden border-b border-slate-200 bg-storm-navy text-white lg:block transition-all",
            collapsed && "lg:hidden",
          )}
        >
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 text-xs">
            <p className="font-medium">
              Serving St. Louis, MO and the Metro East
            </p>
            <div className="flex items-center gap-3">
              <PhoneLink
                size="sm"
                trackingLocation="header_utility"
                className="text-signal-amber"
                label={`Call Us: ${BUSINESS.phone}`}
                showIcon={false}
              />
              <span className="text-white/40">|</span>
              <BusinessHoursBadge className="text-white" />
            </div>
          </div>
        </div>

        {/* Desktop main row */}
        <div
          className={cn(
            "mx-auto hidden max-w-7xl items-center justify-between px-6 transition-all lg:flex",
            collapsed ? "h-14" : "h-20",
          )}
        >
          <Logo size={collapsed ? "sm" : "md"} />

          <nav className="flex items-center gap-1" aria-label="Primary">
            <DropdownNav
              label="Services"
              triggerKey="services"
              openKey={openDropdown}
              onOpen={(k) => {
                cancelClose();
                setOpenDropdown(k);
              }}
              onScheduleClose={scheduleClose}
              onCancelClose={cancelClose}
              items={SERVICES.map((s) => ({
                href: `/services/${s.slug}`,
                label: s.label,
                description: s.description,
              }))}
              footer={{ href: "/services", label: "View all services" }}
            />
            <DropdownNav
              label="Service Areas"
              triggerKey="areas"
              openKey={openDropdown}
              onOpen={(k) => {
                cancelClose();
                setOpenDropdown(k);
              }}
              onScheduleClose={scheduleClose}
              onCancelClose={cancelClose}
              items={CITIES.map((c) => ({
                href: `/service-areas/${c.slug}`,
                label: c.label,
                description: c.description,
              }))}
              footer={{ href: "/service-areas", label: "View all areas" }}
            />
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-storm-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-end">
            <PhoneLink
              variant="button"
              size={collapsed ? "md" : "lg"}
              trackingLocation="header_primary"
              label={`Call ${BUSINESS.phone}`}
            />
            {!collapsed ? (
              <Link
                href="/free-estimate"
                className="mt-1 text-[13px] text-slate-500 underline-offset-4 hover:text-storm-navy hover:underline"
              >
                Or request a callback
              </Link>
            ) : null}
          </div>
        </div>

        {/* Mobile single row */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="inline-flex size-10 items-center justify-center rounded-md text-storm-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            aria-label="Open menu"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
          <Logo size="sm" />
          <PhoneLink
            variant="button"
            size="sm"
            trackingLocation="header_mobile_compact"
            label=""
            aria-label={`Call ${BUSINESS.name}`}
            className="size-10 px-0"
          >
            <Phone size={18} aria-hidden="true" />
          </PhoneLink>
        </div>
      </header>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}

type DropdownItem = { href: string; label: string; description: string };

function DropdownNav({
  label,
  triggerKey,
  openKey,
  onOpen,
  onScheduleClose,
  onCancelClose,
  items,
  footer,
}: {
  label: string;
  triggerKey: NonNullable<DropdownKey>;
  openKey: DropdownKey;
  onOpen: (k: DropdownKey) => void;
  onScheduleClose: () => void;
  onCancelClose: () => void;
  items: DropdownItem[];
  footer: { href: string; label: string };
}) {
  const isOpen = openKey === triggerKey;
  const id = `dropdown-${triggerKey}`;

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpen(triggerKey)}
      onMouseLeave={onScheduleClose}
      onFocus={() => onOpen(triggerKey)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          onScheduleClose();
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={id}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-storm-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
        onClick={() => onOpen(isOpen ? null : triggerKey)}
      >
        {label}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      {isOpen ? (
        <div
          id={id}
          role="menu"
          onMouseEnter={onCancelClose}
          onMouseLeave={onScheduleClose}
          className="absolute left-0 top-full z-50 mt-1 w-[420px] rounded-lg border border-slate-200 bg-white p-2 shadow-card"
        >
          <ul className="grid grid-cols-1 gap-0.5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block rounded-md p-3 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
                >
                  <div className="font-heading text-sm font-semibold text-storm-navy">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    {item.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-1 border-t border-slate-200 pt-1">
            <Link
              href={footer.href}
              role="menuitem"
              className="block rounded-md p-3 text-sm font-semibold text-signal-amber underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy"
            >
              {footer.label} →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
