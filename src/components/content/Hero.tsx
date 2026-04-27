import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { CallOrCallbackBlock } from "@/components/cta/CallOrCallbackBlock";
import { cn } from "@/lib/utils";
import type { CtaClass } from "@/types";

export type HeroMedia =
  | { kind: "image"; src: string; alt: string }
  | { kind: "node"; node: React.ReactNode };

export type HeroProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  trustBullets?: string[];
  media?: HeroMedia;
  ctaClass: CtaClass;
  trackingLocation?: string;
  className?: string;
};

export function Hero({
  eyebrow,
  headline,
  subhead,
  trustBullets,
  media,
  ctaClass,
  trackingLocation = "hero",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-hearthstone",
        className,
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20">
        <div className="flex flex-col justify-center">
          {eyebrow ? (
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-signal-amber">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-storm-navy sm:text-4xl lg:text-h1 lg:leading-tight">
            {headline}
          </h1>
          {subhead ? (
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              {subhead}
            </p>
          ) : null}
          {trustBullets && trustBullets.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {trustBullets.map((bullet) => (
                <li key={bullet} className="inline-flex items-center gap-1.5">
                  <Check size={16} aria-hidden="true" className="text-success" />
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8">
            <CallOrCallbackBlock
              ctaClass={ctaClass}
              trackingLocation={trackingLocation}
            />
          </div>
        </div>
        {media ? (
          <div className="relative flex items-center">
            {media.kind === "image" ? (
              <Image
                src={media.src}
                alt={media.alt}
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[3/2] w-full rounded-xl object-cover shadow-card"
              />
            ) : (
              media.node
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Hero;
