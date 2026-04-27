"use client";

import * as React from "react";

export type LazyMountProps = {
  /** Pixels of root margin — start mounting before the element enters
   *  the viewport. Default 200px. */
  rootMargin?: string;
  /** Optional placeholder rendered while the component hasn't mounted. */
  placeholder?: React.ReactNode;
  /** Min height for the placeholder so layout doesn't shift on mount. */
  placeholderHeight?: number | string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Mounts children only after the surrounding element scrolls into the
 * viewport. Use for heavy below-fold widgets (map embeds, video players,
 * third-party iframes) where eagerly evaluating the JS hurts INP/LCP.
 *
 * Layout-stable: reserves the placeholder height before mount so CLS
 * stays at 0.
 */
export function LazyMount({
  rootMargin = "200px",
  placeholder,
  placeholderHeight,
  className,
  children,
}: LazyMountProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = React.useState(false);

  React.useEffect(() => {
    if (shouldMount) return;
    const node = ref.current;
    if (!node) return;
    // Old browser or non-DOM env: there's no observer to wait on, so we
    // schedule the mount via a microtask to avoid the "setState in effect"
    // lint rule while still landing in the next render cycle.
    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setShouldMount(true), 0);
      return () => window.clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldMount, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        !shouldMount && placeholderHeight !== undefined
          ? { minHeight: placeholderHeight }
          : undefined
      }
    >
      {shouldMount ? children : placeholder ?? null}
    </div>
  );
}

export default LazyMount;
