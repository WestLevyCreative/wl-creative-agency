import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AgentMedia {
  id?: string;
  url: string;
  type: string;
  is_primary?: boolean;
  sort_order?: number;
}

export interface AgentSummary {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  role_title: string | null;
  short_bio: string | null;
  is_featured: boolean;
  media: AgentMedia[];
}

interface AgentQueryResult {
  id: string;
  slug: string;
  first_name: string;
  last_name: string;
  role_title: string | null;
  short_bio: string | null;
  is_featured: boolean | null;
  agent_media?: AgentMedia[];
}

export function useAgents() {
  const [agents, setAgents] = useState<AgentSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("agent_profiles")
        .select("id, slug, first_name, last_name, role_title, short_bio, is_featured, agent_media(url, type, is_primary, sort_order)")
        .eq("is_published", true)
        .order("first_name") as { data: AgentQueryResult[] | null; error: unknown };

      if (error) {
        setError(error instanceof Error ? error.message : 'Failed to load agents');
        setLoading(false);
        return;
      }

      const mapped: AgentSummary[] = (data || []).map(agent => ({
        id: agent.id,
        slug: agent.slug,
        first_name: agent.first_name,
        last_name: agent.last_name,
        role_title: agent.role_title ?? null,
        short_bio: agent.short_bio ?? null,
        is_featured: agent.is_featured ?? false,
        media: agent.agent_media || [],
      }));

      setAgents(mapped);
      setLoading(false);
    };

    fetchAgents();
  }, []);

  return { agents, loading, error };
}
