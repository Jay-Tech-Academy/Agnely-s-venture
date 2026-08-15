# AGNELY's VENTURE

Next.js App Router + TypeScript + Supabase.

## Admin

Supabase Auth/signup/login is intentionally not used.

Set a server-side password in `.env.local`:

```env
ADMIN_PASSWORD=12:/44$@
```

Open `/admin`. Visitors are redirected to `/admin/login`. A successful password check creates an HTTP-only 12-hour cookie. The password is never shipped to the browser.

Database and image writes are protected Next.js server routes using the server-only Supabase service-role key.

## Supabase

Run `supabase/schema.sql` and create a **public** Storage bucket named `product-images`.

Set:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSWORD=...
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client.

## Run

```bash
npm install
npm run dev
```
