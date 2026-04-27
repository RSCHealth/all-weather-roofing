import * as React from "react";

export type JsonLdProps = {
  /** One or more schema.org JSON-LD objects. Pass `null` / `undefined`
   *  values are skipped — convenient for conditionally emitting
   *  AggregateRating that only renders when ≥5 reviews exist. */
  schemas: (Record<string, unknown> | null | undefined)[];
};

/**
 * Renders one `<script type="application/ld+json">` per non-null entry in
 * `schemas`. Serialization uses `JSON.stringify` (no whitespace) so the
 * output is byte-stable between SSR and client hydration — preventing
 * React's "text content did not match" warnings.
 */
export function JsonLd({ schemas }: JsonLdProps) {
  return (
    <>
      {schemas.map((schema, i) => {
        if (!schema) return null;
        return (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
}

export default JsonLd;
