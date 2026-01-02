import Link from "next/link";
import { Card } from "@/components/ui/card";
import { statusColors } from "./status";

interface CampaignCardProps {
  campaign: {
    id: string;
    name: string;
    status: string;
    tier_id?: string;
    assigned_agent?: {
      first_name?: string;
      last_name?: string;
    };
    milestones?: Array<{ status?: string }>;
  };
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const total = campaign.milestones?.length || 0;
  const completed = campaign.milestones?.filter((m) => m.status === "completed").length || 0;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <Card className="p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{campaign.name}</h3>
          <p className="text-sm text-muted-foreground">Tier: {campaign.tier_id || "—"}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[campaign.status] || "bg-slate-100 text-slate-800"}`}>
          {campaign.status}
        </span>
      </div>

      <div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span className="font-medium text-foreground">{progress}%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-2 rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-foreground">
            {(campaign.assigned_agent?.first_name || "A")[0]}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-foreground">
              {campaign.assigned_agent?.first_name} {campaign.assigned_agent?.last_name}
            </p>
            <p className="text-xs text-muted-foreground">Assigned agent</p>
          </div>
        </div>
        <Link href={`/client/campaigns/${campaign.id}`} className="text-sm font-medium text-primary hover:text-primary/80">
          View details
        </Link>
      </div>
    </Card>
  );
}
