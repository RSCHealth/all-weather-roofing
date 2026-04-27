import * as React from "react";
import { cn } from "@/lib/utils";

export type RadioOption = { value: string; label: string; description?: string };

export type RadioGroupProps = {
  name: string;
  legend: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  layout?: "horizontal" | "vertical";
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
};

export function RadioGroup({
  name,
  legend,
  options,
  value,
  defaultValue,
  onChange,
  layout = "vertical",
  required,
  error,
  hint,
  className,
}: RadioGroupProps) {
  const reactId = React.useId();
  const errorId = error ? `${reactId}-error` : undefined;
  const hintId = hint ? `${reactId}-hint` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <fieldset
      className={cn("flex flex-col gap-2", className)}
      aria-describedby={describedBy}
      aria-invalid={error ? true : undefined}
    >
      <legend className="text-sm font-medium text-slate-700">
        {legend}
        {required ? <span className="ml-0.5 text-alert-crimson" aria-hidden="true">*</span> : null}
      </legend>
      <div
        role="radiogroup"
        className={cn(
          layout === "horizontal"
            ? "flex flex-wrap gap-2"
            : "flex flex-col gap-2",
        )}
      >
        {options.map((opt) => {
          const inputId = `${reactId}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={inputId}
              className={cn(
                "group relative flex min-h-12 cursor-pointer items-center gap-3 rounded-md border bg-white px-3.5 py-2 text-base text-slate-900 transition-colors",
                "has-[:checked]:border-storm-navy has-[:checked]:bg-storm-navy/5",
                "hover:border-storm-navy/50",
                "focus-within:outline-none focus-within:ring-2 focus-within:ring-storm-navy focus-within:ring-offset-1 focus-within:ring-offset-hearthstone",
                error ? "border-alert-crimson" : "border-slate-300",
                layout === "horizontal" && "flex-1 justify-center",
              )}
            >
              <input
                id={inputId}
                type="radio"
                name={name}
                value={opt.value}
                checked={value !== undefined ? value === opt.value : undefined}
                defaultChecked={value === undefined ? defaultValue === opt.value : undefined}
                onChange={(e) => onChange?.(e.target.value)}
                required={required}
                className="size-4 shrink-0 accent-storm-navy"
              />
              <span className="flex flex-col">
                <span className="font-medium">{opt.label}</span>
                {opt.description ? (
                  <span className="text-xs text-slate-500">{opt.description}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {hint && !error ? (
        <p id={hintId} className="text-xs text-slate-500">{hint}</p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-xs font-medium text-alert-crimson">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export default RadioGroup;
