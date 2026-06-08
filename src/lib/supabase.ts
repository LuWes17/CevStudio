import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase clients. Keys never reach the browser.
 *
 * - `anonClient()` is used to INSERT contact submissions. RLS allows anon
 *   inserts only, so even if this leaked it could not read data back.
 * - `adminClient()` uses the service-role key to READ submissions in /admin.
 *   It bypasses RLS and must never be imported into a client component.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export function anonClient() {
  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }
  return createClient(url, anonKey, { auth: { persistSession: false } });
}

export function adminClient() {
  if (!url || !serviceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY",
    );
  }
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}
