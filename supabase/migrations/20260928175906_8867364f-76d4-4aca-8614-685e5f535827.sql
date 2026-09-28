CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE CHECK (length(email) <= 254 AND email ~* '^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$'),
  source text NOT NULL DEFAULT 'homepage',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (source = 'homepage');
CREATE OR REPLACE FUNCTION public.set_newsletter_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER set_newsletter_updated_at BEFORE UPDATE ON public.newsletter_subscribers FOR EACH ROW EXECUTE FUNCTION public.set_newsletter_updated_at();