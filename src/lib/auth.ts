import "server-only";
import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "cev_admin";

/**
 * The cookie never stores the plaintext password. Instead it holds a SHA-256
 * digest of it; on each request we recompute the digest from ADMIN_PASSWORD and
 * compare. Rotating the password invalidates every existing cookie for free.
 */
export function adminToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return createHash("sha256").update(pw).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/** Constant-time check of a submitted password against ADMIN_PASSWORD. */
export function passwordMatches(submitted: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return safeEqual(submitted, expected);
}

/** True when the request carries a valid admin cookie. */
export async function isAdminAuthed(): Promise<boolean> {
  const token = adminToken();
  if (!token) return false;
  const jar = await cookies();
  const value = jar.get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  return safeEqual(value, token);
}
