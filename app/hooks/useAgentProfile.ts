import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface AgentProfile {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  role_title: string | null;
  short_bio: string | null;
  full_bio: string[] | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  calendly_url: string | null;
  contact_email: string | null;
  portfolio_url: string | null;
  portfolio_label: string | null;
  media: { id?: string; url: string; is_primary?: boolean; sort_order?: number; type?: string }[];
  sections: { id?: string; title: string; subtitle: string | null; content: string; sort_order?: number }[];
  socials: { id?: string; platform: string; handle: string; url: string }[];
}

interface AgentProfileQueryResult {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  role_title: string | null;
  short_bio: string | null;
  full_bio: string[] | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  calendly_url: string | null;
  contact_email: string | null;
  portfolio_url: string | null;
  portfolio_label: string | null;
  agent_media?: { id?: string; url: string; is_primary?: boolean; sort_order?: number; type?: string }[];
  agent_sections?: { id?: string; title: string; subtitle: string | null; content: string; sort_order?: number }[];
  agent_socials?: { id?: string; platform: string; handle: string; url: string }[];
}

export function useAgentProfile(slug: string | undefined) {
  const [agent, setAgent] = useState<AgentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchAgent = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("agent_profiles")
        .select(`
          id, slug, first_name, last_name, role_title, short_bio, full_bio, phone, email, website,
          calendly_url, contact_email, portfolio_url, portfolio_label,
          agent_media(id, url, is_primary, sort_order, type),
          agent_sections(id, title, subtitle, content, sort_order),
          agent_socials(id, platform, handle, url)
        `)
        .eq("slug", slug)
        .maybeSingle() as { data: AgentProfileQueryResult | null; error: unknown };

      if (error) {
        setError(error instanceof Error ? error.message : 'Failed to load agent profile');
        setLoading(false);
        return;
      }

      if (!data) {
        setAgent(null);
        setLoading(false);
        return;
      }

      setAgent({
        id: data.id,
        slug: data.slug,
        first_name: data.first_name,
        last_name: data.last_name,
        role_title: data.role_title ?? null,
        short_bio: data.short_bio ?? null,
        full_bio: data.full_bio ?? null,
        phone: data.phone ?? null,
        email: data.email ?? null,
        website: data.website ?? null,
        calendly_url: data.calendly_url ?? null,
        contact_email: data.contact_email ?? null,
        portfolio_url: data.portfolio_url ?? null,
        portfolio_label: data.portfolio_label ?? null,
        media: data.agent_media || [],
        sections: data.agent_sections || [],
        socials: data.agent_socials || [],
      });

      setLoading(false);
    };

    fetchAgent();
  }, [slug]);

  return { agent, loading, error };
}
