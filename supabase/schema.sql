create extension if not exists pgcrypto;
create table if not exists public.products(id uuid primary key default gen_random_uuid(),title text not null,category text not null,price numeric(12,2) not null check(price>=0),stock integer not null default 0 check(stock>=0),image_url text not null,description text,active boolean not null default true,created_at timestamptz not null default now());
alter table public.products enable row level security;
drop policy if exists "public can view active products" on public.products;
create policy "public can view active products" on public.products for select to anon,authenticated using(active=true);
-- No public write policies. Admin writes use protected Next.js server routes.
-- Create a PUBLIC Supabase Storage bucket named product-images.
