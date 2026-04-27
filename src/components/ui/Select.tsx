import * as React from "react";
import { cn } from "@/lib/utils";

export type SelectOption = { value: string; label: string };

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
  containerClassName?: string;
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      options,
      error,
      hint,
      id,
      className,
      containerClassName,
      placeholder,
      required,
      ...props
    },
    ref,
  ) {
    const reactId = React.useId();
    const selectId = id ?? `select-${reactId}`;
    const errorId = error ? `${selectId}-error` : undefined;
    const hintId = hint ? `${selectId}-hint` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        <label htmlFor={selectId} className="text-sm font-medium text-slate-700">
          {label}
          {required ? <span className="ml-0.5 text-alert-crimson" aria-hidden="true">*</span> : null}
        </label>
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          required={required}
          className={cn(
            "min-h-12 w-full appearance-none rounded-md border bg-white px-3.5 pr-10 text-base text-slate-900",
            "bg-[length:14px] bg-[right_14px_center] bg-no-repeat",
            "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23334155%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')]",
            "focus:outline-none focus:ring-2 focus:ring-storm-navy focus:ring-offset-1 focus:ring-offset-hearthstone",
            "disabled:cursor-not-allowed disabled:opacity-60",
            error
              ? "border-alert-crimson focus:ring-alert-crimson"
              : "border-slate-300",
            className,
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {hint && !error ? (
          <p id={hintId} className="text-xs text-slate-500">{hint}</p>
        ) : null}
        {error ? (
          <p id={errorId} className="text-xs font-medium text-alert-crimson">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

export default Select;
