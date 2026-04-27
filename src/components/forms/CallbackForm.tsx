"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneOutgoing } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import {
  CallbackSchema,
  type CallbackPayload,
  BEST_TIME_OPTIONS,
} from "@/lib/callback-schema";
import { BUSINESS } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export type CallbackFormProps = {
  className?: string;
  /** Suppresses the heading + subtext when the form is embedded somewhere
   *  that already provides them (e.g. inside a hero or modal). */
  compact?: boolean;
  sourceCity?: string;
  sourceService?: string;
};

function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function CallbackForm({
  className,
  compact,
  sourceCity,
  sourceService,
}: CallbackFormProps) {
  const pathname = usePathname() ?? "/";
  const [submitted, setSubmitted] = React.useState<{
    name: string;
    phone: string;
  } | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    control,
  } = useForm<CallbackPayload>({
    resolver: zodResolver(CallbackSchema),
    defaultValues: {
      name: "",
      phone: "",
      bestTime: "asap",
      note: "",
      sourcePage: pathname,
      sourceCity,
      sourceService,
    },
  });

  const noteValue = useWatch({ control, name: "note" }) ?? "";
  const bestTime = useWatch({ control, name: "bestTime" });

  const onSubmit = async (data: CallbackPayload) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed");
      }
      trackEvent("callback_submit", {
        source: data.sourcePage,
        bestTime: data.bestTime,
      });
      setSubmitted({ name: data.name, phone: data.phone });
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us directly.",
      );
    }
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-lg border border-success/30 bg-success/5 p-6",
          className,
        )}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <h3 className="font-heading text-h3 font-semibold text-storm-navy">
          Callback request received — we&rsquo;ll call {submitted.name} at {submitted.phone}.
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          A real person from our team will reach out during your selected window.
          Most callbacks happen within 2 business hours.
        </p>
        <p className="mt-4 text-sm">
          Can&rsquo;t wait?{" "}
          <PhoneLink
            size="md"
            trackingLocation="callback_form_success"
            className="font-semibold"
          >
            Call us directly at {BUSINESS.phone}
          </PhoneLink>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-5 shadow-card sm:p-6",
        className,
      )}
    >
      {!compact ? (
        <header className="mb-4">
          <h3 className="font-heading text-h3 font-semibold text-storm-navy">
            Request a Callback
          </h3>
          <p className="mt-1 text-sm text-slate-700">
            Leave your number and we&rsquo;ll call you — usually within 2 business
            hours.
          </p>
        </header>
      ) : null}

      <div className="flex flex-col gap-4">
        <Input
          label="Name"
          autoComplete="name"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="(314) 555-0100"
          error={errors.phone?.message}
          {...register("phone", {
            onChange: (e) => {
              const formatted = formatPhone(e.target.value);
              setValue("phone", formatted, { shouldValidate: false });
            },
          })}
        />
        <RadioGroup
          name="bestTime"
          legend="Best time to call"
          required
          layout="horizontal"
          options={BEST_TIME_OPTIONS}
          value={bestTime}
          onChange={(v) =>
            setValue("bestTime", v as CallbackPayload["bestTime"], {
              shouldValidate: true,
            })
          }
          error={errors.bestTime?.message}
        />
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="callback-note"
            className="text-sm font-medium text-slate-700"
          >
            Brief note (optional)
          </label>
          <textarea
            id="callback-note"
            maxLength={300}
            rows={3}
            placeholder="e.g., 'leak in the ceiling, attic's wet'"
            className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-storm-navy"
            {...register("note")}
          />
          <p className="self-end text-xs text-slate-500">
            {noteValue.length}/300
          </p>
        </div>
      </div>

      <p
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        className="mt-3 text-sm font-medium text-alert-crimson empty:hidden"
      >
        {submitError ?? ""}
      </p>

      <Button
        type="submit"
        variant="cta"
        size="lg"
        icon={PhoneOutgoing}
        fullWidth
        disabled={isSubmitting}
        className="mt-5"
      >
        {isSubmitting ? "Sending…" : "Request My Callback"}
      </Button>

      <p className="mt-3 text-center text-xs text-slate-500">
        🔒 Your info stays with us. We don&rsquo;t sell, share, or spam.
      </p>
    </form>
  );
}

export default CallbackForm;
