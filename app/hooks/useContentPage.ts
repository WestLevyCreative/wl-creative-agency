import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";

export interface ContentPage {
  slug: string;
  title: string;
  body_json: Json;
}

export function useContentPage(slug: string) {
  const [content, setContent] = useState<ContentPage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (!slug) return;
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("content_pages")
        .select("slug, title, body_json")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) {
        setError(error.message);
        setContent(null);
        setLoading(false);
        return;
      }

      setContent(data as ContentPage | null);
      setLoading(false);
    };

    fetchContent();
  }, [slug]);

  return { content, loading, error };
}
