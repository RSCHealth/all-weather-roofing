import { z } from "zod";

export const CallbackSchema = z.object({
  name: z.string().min(2, "Name is too short").max(60),
  phone: z
    .string()
    .regex(/^[\d\s\-()+]{10,20}$/, "Enter a valid phone number"),
  bestTime: z.enum(["asap", "morning", "afternoon", "evening"]),
  note: z.string().max(300).optional(),
  // Hidden — auto-populated by the form
  sourcePage: z.string(),
  sourceCity: z.string().optional(),
  sourceService: z.string().optional(),
});

export type CallbackPayload = z.infer<typeof CallbackSchema>;

export const BEST_TIME_OPTIONS: { value: CallbackPayload["bestTime"]; label: string }[] = [
  { value: "asap",      label: "ASAP" },
  { value: "morning",   label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening",   label: "Evening" },
];
