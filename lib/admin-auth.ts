import crypto from "crypto";
import { cookies } from "next/headers";
const COOKIE = "agnelys_admin";
export function adminToken() { return crypto.createHmac("sha256", process.env.ADMIN_PASSWORD || "").update(process.env.ADMIN_PASSWORD || "").digest("hex"); }
export async function isAdmin() { return (await cookies()).get(COOKIE)?.value === adminToken(); }
export async function setAdminCookie() { (await cookies()).set(COOKIE, adminToken(), { httpOnly:true, secure:process.env.NODE_ENV === "production", sameSite:"lax", path:"/", maxAge:43200 }); }
export async function clearAdminCookie() { (await cookies()).delete(COOKIE); }
