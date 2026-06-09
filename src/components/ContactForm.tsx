"use client";

import { useActionState, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (state.status === "success") {
    return <SuccessPanel />;
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-7"
    >
      {/* Honeypot — visually hidden, off the tab order. Bots fill it; people don't. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field
        index="01"
        name="name"
        label="Name"
        type="text"
        placeholder="Ada Lovelace"
        autoComplete="name"
        error={state.fieldErrors?.name}
      />
      <Field
        index="02"
        name="email"
        label="Email"
        type="email"
        placeholder="you@studio.com"
        autoComplete="email"
        error={state.fieldErrors?.email}
      />
      <MessageField error={state.fieldErrors?.message} />

      {state.status === "error" && state.error && !state.fieldErrors && (
        <p className="font-mono text-xs text-accent" role="alert">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

function Field({
  index,
  name,
  label,
  type,
  placeholder,
  autoComplete,
  error,
}: {
  index: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  error?: string;
}) {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft"
      >
        <span>
          <span className="text-accent">({index})</span> {label}
        </span>
        {error && <span className="text-accent normal-case tracking-normal">{error}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        className="mt-2 w-full border-b border-rule bg-transparent pb-2 font-display text-2xl text-ink placeholder:text-rule transition-colors duration-200 outline-none focus:border-accent"
      />
    </div>
  );
}

function MessageField({ error }: { error?: string }) {
  return (
    <div>
      <label
        htmlFor="message"
        className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft"
      >
        <span>
          <span className="text-accent">(03)</span> Message
        </span>
        {error && <span className="text-accent normal-case tracking-normal">{error}</span>}
      </label>
      <textarea
        id="message"
        name="message"
        rows={3}
        placeholder="What are you making, and where do we come in?"
        aria-invalid={error ? true : undefined}
        className="mt-2 w-full resize-none border-b border-rule bg-transparent pb-2 font-display text-2xl text-ink placeholder:text-rule transition-colors duration-200 outline-none focus:border-accent"
      />
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group mt-1 inline-flex items-center justify-between gap-4 self-start bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-accent hover:text-accent-ink disabled:cursor-wait disabled:opacity-70"
    >
      <span>{pending ? "Sending…" : "Send it over"}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </button>
  );
}

function SuccessPanel() {
  return (
    <div className="reveal flex flex-col gap-4 border-t border-accent pt-8">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Message received
      </span>
      <p className="font-display text-3xl leading-tight text-ink sm:text-4xl">
        Got it. We read everything that lands here and we&apos;ll write back within
        a day or two.
      </p>
      <p className="font-sans text-ink-soft">
        In the meantime — no autoresponder, no drip campaign. Just a real reply
        from a real person on the studio.
      </p>
    </div>
  );
}
