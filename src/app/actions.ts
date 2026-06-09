"use server";

import { z } from "zod";
import { anonClient } from "@/lib/supabase";

const schema = z.object({
  name: z.string().trim().min(1, "Tell us your name.").max(100),
  email: z.email("That email doesn't look right."),
  message: z
    .string()
    .trim()
    .min(1, "Say a little about what you're making.")
    .max(2000, "That's a lot — trim it under 2000 characters."),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill the hidden "company" field. Bots do —
  // silently accept so they don't retry, but store nothing.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as "name" | "email" | "message";
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", error: "Please fix the highlighted fields.", fieldErrors };
  }

  const { error } = await anonClient().from("submissions").insert(parsed.data);

  if (error) {
    return {
      status: "error",
      error: "Something broke on our end. Mind trying again?",
    };
  }

  return { status: "success" };
}
