"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Logo from "@/components/Logo";
import { login, type LoginState } from "@/app/admin/actions";

const initial: LoginState = {};

export default function AdminLogin() {
  const [state, formAction] = useActionState(login, initial);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Logo className="text-lg" />
        <p className="mt-10 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent">
          Restricted
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">
          Studio access
        </h1>
        <p className="mt-3 font-sans text-sm text-ink-soft">
          Enter the studio password to view contact submissions.
        </p>

        <form action={formAction} className="mt-8 flex flex-col gap-5">
          <div>
            <label
              htmlFor="password"
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              autoFocus
              aria-invalid={state.error ? true : undefined}
              className="mt-2 w-full border-b border-rule bg-transparent pb-2 font-display text-xl text-ink transition-colors duration-200 outline-none focus:border-accent"
            />
          </div>

          {state.error && (
            <p className="font-mono text-xs text-accent" role="alert">
              {state.error}
            </p>
          )}

          <SubmitButton />
        </form>
      </div>
    </main>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-between gap-4 self-start bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-accent hover:text-accent-ink disabled:cursor-wait disabled:opacity-70"
    >
      <span>{pending ? "Checking…" : "Enter"}</span>
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}
