# cev.studio

One-page landing site for **cev.studio**, an independent digital studio
(web development, mobile apps, brand identity, 3D modelling). The contact form
is the hero — submissions are stored in Supabase and reviewed at a
password-gated `/admin` route.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router, Server Actions, Turbopack)
- **TypeScript**, **Tailwind CSS v4**
- **Supabase** (Postgres) for storing contact submissions
- **zod** for input validation
- Type: Bricolage Grotesque (display) · IBM Plex Mono (labels) · Geist (body)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
```

## Environment variables

| Variable                        | Required | Notes                                              |
| ------------------------------- | -------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | yes      | Supabase → Project Settings → API → Project URL    |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes      | Supabase → API → anon/public key                   |
| `SUPABASE_SERVICE_ROLE_KEY`     | yes      | Supabase → API → service_role key (server-only)    |
| `ADMIN_PASSWORD`                | yes      | Password protecting `/admin`                       |
| `NEXT_PUBLIC_SITE_URL`          | no       | Production URL for canonical/OG. Defaults to a placeholder. |

## Database setup

Run this once in the Supabase SQL editor:

```sql
create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.submissions enable row level security;

-- Anonymous visitors may INSERT only. No read/update/delete for anon —
-- the admin view reads with the service-role key, which bypasses RLS.
create policy "anon can insert" on public.submissions
  for insert to anon with check (true);
```

## How it works

- **Contact form** (`/`) → a Server Action (`src/app/actions.ts`) validates with
  zod, drops honeypot hits, and inserts via the anon Supabase client. Keys never
  reach the browser.
- **Admin** (`/admin`) is gated by a cookie holding `sha256(ADMIN_PASSWORD)`
  (never the plaintext), compared in constant time. Submissions are read with the
  service-role client, newest first.

## Routes

| Route    | Description                                  |
| -------- | -------------------------------------------- |
| `/`      | Landing page + contact form (the hero)       |
| `/admin` | Password-gated list of submissions           |

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Add all environment variables above in **Project → Settings → Environment
   Variables** (use the same values as `.env.local`; set `NEXT_PUBLIC_SITE_URL`
   to your Vercel/production URL).
4. Deploy. No build configuration changes are needed.

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```
