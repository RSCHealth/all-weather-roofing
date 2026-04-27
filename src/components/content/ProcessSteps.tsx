import * as React from "react";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

export type ProcessStepsProps = {
  headline?: string;
  steps: ProcessStep[];
  className?: string;
};

export function ProcessSteps({ headline, steps, className }: ProcessStepsProps) {
  return (
    <section
      className={cn("mx-auto w-full max-w-7xl px-6 py-12 lg:py-16", className)}
      aria-labelledby={headline ? "process-heading" : undefined}
    >
      {headline ? (
        <h2
          id="process-heading"
          className="font-heading text-h2 font-bold text-storm-navy"
        >
          {headline}
        </h2>
      ) : null}
      <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {steps.map((step, idx) => (
          <li
            key={step.title}
            className="relative flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-card"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-9 items-center justify-center rounded-full bg-signal-amber font-heading text-base font-bold text-white"
            >
              {idx + 1}
            </span>
            <h3 className="mt-3 font-heading text-base font-semibold text-storm-navy">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProcessSteps;
