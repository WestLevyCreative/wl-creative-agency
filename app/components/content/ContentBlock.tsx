import { Json } from "@/integrations/supabase/types";
import { cn } from "@/lib/utils";

interface Props {
  title?: string;
  body?: Json | null;
  loading?: boolean;
  error?: string | null;
  className?: string;
}

const renderBody = (body?: Json | null) => {
  if (!body) return null;

  if (Array.isArray(body)) {
    return (
      <div className="space-y-2 text-sm text-muted-foreground">
        {body.map((item, idx) => (
          <p key={idx}>{String(item)}</p>
        ))}
      </div>
    );
  }

  if (typeof body === "object") {
    const maybeText = (body as Record<string, unknown>)?.text;
    if (maybeText) {
      return <p className="text-sm text-muted-foreground">{String(maybeText)}</p>;
    }
  }

  return <p className="text-sm text-muted-foreground">{String(body)}</p>;
};

export function ContentBlock({ title, body, loading, error, className }: Props) {
  if (loading) {
    return (
      <div className={cn("p-6 rounded-xl border border-border bg-card animate-pulse", className)}>
        <div className="h-4 w-32 bg-muted rounded mb-3" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-muted rounded" />
          <div className="h-3 w-3/4 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn("p-6 rounded-xl border border-destructive/50 bg-card text-destructive text-sm", className)}>
        {error}
      </div>
    );
  }

  if (!title && !body) return null;

  return (
    <div className={cn("p-6 rounded-xl border border-border bg-card", className)}>
      {title && <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>}
      {renderBody(body)}
    </div>
  );
}
