create table if not exists public.projects (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  status text not null default 'active' check (status in ('active', 'completed', 'archived')),
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
on public.projects
for select
to anon
using (true);

insert into public.projects (title, description, status)
values
  ('Portfolio Redesign', 'Refresh landing page visuals and typography', 'active'),
  ('Auth Integration', 'Wire up Supabase auth flow', 'completed'),
  ('Legacy Cleanup', 'Archive deprecated feature branch notes', 'archived')
on conflict do nothing;