import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { statusColors } from "./status";

interface MilestoneListProps {
  milestones: Array<{
    id: string;
    title: string;
    description?: string;
    status: string;
    due_date?: string;
    completed_at?: string;
  }>;
}

export function MilestoneList({ milestones }: MilestoneListProps) {
  if (!milestones?.length) {
    return (
      <Card className="p-4 text-sm text-muted-foreground">
        No milestones yet. Your deliverables will appear here.
      </Card>
    );
  }

  const iconFor = (status: string) => {
    if (status === "completed") return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    if (status === "in_progress") return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />;
    return <Circle className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <Card className="p-4 space-y-3">
      <h3 className="text-sm font-semibold text-foreground">Milestones</h3>
      <div className="space-y-3">
        {milestones.map((m) => (
          <div key={m.id} className="p-3 rounded-lg border border-border">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-1">{iconFor(m.status)}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{m.title}</p>
                  {m.description && <p className="text-sm text-muted-foreground">{m.description}</p>}
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[m.status] || "bg-slate-100 text-slate-800"}`}>
                {m.status}
              </span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground flex gap-3">
              {m.due_date && <span>Due: {new Date(m.due_date).toLocaleDateString()}</span>}
              {m.completed_at && <span>Completed: {new Date(m.completed_at).toLocaleDateString()}</span>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
