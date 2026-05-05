-- Supabase migration: run in Supabase SQL Editor. This file provides
-- the table schema. Policies and seed data are listed below as
-- commented instructions because the workspace SQL checker has a
-- limited dialect parser. Apply the policies and seed data directly
-- in your Supabase project when ready.

CREATE TABLE IF NOT EXISTS public.projects (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid,
  title text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Row-level security and policies (apply in Supabase SQL editor):
-- ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Authenticated users can read own projects"
--  ON public.projects FOR SELECT TO authenticated USING (user_id = auth.uid());
-- CREATE POLICY "Authenticated users can insert own projects"
--  ON public.projects FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

-- Seed data (optional - will be inaccessible under RLS unless user_id set):
-- INSERT INTO public.projects (user_id, title, description, status) VALUES
--   (NULL, 'Portfolio Redesign', 'Refresh landing page visuals and typography', 'active'),
--   (NULL, 'Auth Integration', 'Wire up Supabase auth flow', 'completed'),
--   (NULL, 'Legacy Cleanup', 'Archive deprecated feature branch notes', 'archived')
-- ON CONFLICT DO NOTHING;