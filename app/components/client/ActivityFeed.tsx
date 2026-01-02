import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, FileText, MessageSquare } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ActivityFeedProps {
  activities: Array<{
    id: string;
    activity_type?: string;
    title: string;
    description?: string;
    created_at: string;
  }>;
}

const iconForType = (type?: string) => {
  switch (type) {
    case "milestone":
      return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    case "note":
      return <MessageSquare className="w-4 h-4 text-blue-500" />;
    case "document":
      return <FileText className="w-4 h-4 text-purple-500" />;
    default:
      return <Clock className="w-4 h-4 text-muted-foreground" />;
  }
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  if (!activities?.length) {
    return (
      <Card className="p-4 text-sm text-muted-foreground">
        No activity yet. Updates will appear here as your campaigns progress.
      </Card>
    );
  }

  return (
    <Card className="p-4 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Recent activity</h3>
      <div className="space-y-4">
        {activities.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="mt-1">{iconForType(item.activity_type)}</div>
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}
                </span>
              </div>
              {item.description && (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
