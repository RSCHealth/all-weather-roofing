import { NextResponse } from "next/server";
import { CallbackSchema } from "@/lib/callback-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = CallbackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  // Prompt 34 wires actual delivery (email + webhook). For now we just log
  // server-side so dev environments can confirm the form posts correctly.
  console.log("[callback]", parsed.data);

  return NextResponse.json({ ok: true });
}
