import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "cta" | "emergency" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-md transition-colors transition-shadow " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-storm-navy focus-visible:ring-offset-2 focus-visible:ring-offset-hearthstone " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-storm-navy text-white hover:bg-storm-navy/90 active:bg-storm-navy",
  cta:
    "bg-signal-amber text-white shadow-cta hover:bg-signal-amber/90 active:bg-signal-amber",
  emergency:
    "bg-alert-crimson text-white animate-[pulse-cta_2s_ease-in-out_infinite] hover:bg-alert-crimson/90 active:bg-alert-crimson",
  secondary:
    "border-2 border-storm-navy bg-transparent text-storm-navy hover:bg-storm-navy hover:text-white",
  ghost:
    "bg-transparent text-storm-navy hover:bg-storm-navy/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-base",
  lg: "min-h-12 px-6 text-base sm:text-lg",
};

const iconSizes: Record<ButtonSize, number> = { sm: 16, md: 18, lg: 20 };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      fullWidth,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const iconSize = iconSizes[size];
    const iconNode = Icon ? <Icon size={iconSize} aria-hidden="true" /> : null;
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {iconPosition === "left" && iconNode}
        {children}
        {iconPosition === "right" && iconNode}
      </button>
    );
  },
);

export default Button;
