import type { Metadata } from "next";
import Logo from "@/components/Logo";
import AdminLogin from "@/components/AdminLogin";
import { isAdminAuthed } from "@/lib/auth";
import { adminClient, type Submission } from "@/lib/supabase";
import { logout } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — cev.studio",
  robots: { index: false, follow: false },
};

const fmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export default async function AdminPage() {
  if (!(await isAdminAuthed())) {
    return <AdminLogin />;
  }

  const { data, error } = await adminClient()
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  const rows = (data ?? []) as Submission[];

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col border-rule sm:border-x">
      <header className="flex items-center justify-between border-b border-rule px-6 py-5 sm:px-10">
        <div className="flex items-baseline gap-4">
          <Logo className="text-lg" />
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
            Submissions ({rows.length})
          </span>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-accent"
          >
            Sign out →
          </button>
        </form>
      </header>

      <main className="flex-1 px-6 sm:px-10">
        {error ? (
          <p className="py-20 text-center font-mono text-sm text-accent">
            Couldn&rsquo;t load submissions: {error.message}
          </p>
        ) : rows.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-28 text-center">
            <p className="font-display text-3xl font-semibold tracking-tight text-ink">
              Nothing yet.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
              New messages from the contact form land here.
            </p>
          </div>
        ) : (
          <ul>
            {rows.map((row, i) => (
              <li
                key={row.id}
                className="grid gap-3 border-b border-rule py-7 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-xs tracking-wide text-accent">
                  {String(rows.length - i).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {row.name}
                    </h2>
                    <time
                      dateTime={row.created_at}
                      className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft"
                    >
                      {fmt.format(new Date(row.created_at))}
                    </time>
                  </div>
                  <a
                    href={`mailto:${row.email}`}
                    className="w-fit font-mono text-xs text-ink-soft underline-offset-4 hover:text-accent hover:underline"
                  >
                    {row.email}
                  </a>
                  <p className="mt-1 max-w-[70ch] font-sans leading-relaxed whitespace-pre-wrap text-ink">
                    {row.message}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
