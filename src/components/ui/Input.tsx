import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { label, error, hint, id, className, containerClassName, required, ...props },
    ref,
  ) {
    const reactId = React.useId();
    const inputId = id ?? `input-${reactId}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
          {required ? <span className="ml-0.5 text-alert-crimson" aria-hidden="true">*</span> : null}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          required={required}
          className={cn(
            "min-h-12 w-full rounded-md border bg-white px-3.5 text-base text-slate-900",
            "placeholder:text-slate-500",
            "focus:outline-none focus:ring-2 focus:ring-storm-navy focus:ring-offset-1 focus:ring-offset-hearthstone",
            "disabled:cursor-not-allowed disabled:opacity-60",
            error
              ? "border-alert-crimson focus:ring-alert-crimson"
              : "border-slate-300",
            className,
          )}
          {...props}
        />
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

export default Input;
