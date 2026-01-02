import { SectionHeading } from "@/components/SectionHeading";
import { notFound } from "next/navigation";
import { MilestoneList } from "@/components/client/MilestoneList";
import { ActivityFeed } from "@/components/client/ActivityFeed";
import { Card } from "@/components/ui/card";
import { statusColors } from "@/components/client/status";

type Props = { params: { id: string } };

export const metadata = {
  title: "Campaign Detail | Client Portal",
  description: "View campaign specifics and milestones.",
};

const mockCampaign = {
  name: "Podcast Launch & Media Tour",
  status: "active",
  tier: "Signature",
  summary: "A multi-channel launch with press, podcasts, and influencer distribution.",
  milestones: [
    { id: "m-1", title: "Messaging guide", status: "completed" },
    { id: "m-2", title: "Press kit", status: "in_progress" },
    { id: "m-3", title: "Launch episode", status: "pending" },
  ],
  activity: [
    { id: "act-1", activity_type: "milestone", title: "Press release approved", created_at: new Date().toISOString() },
    { id: "act-2", activity_type: "note", title: "Guest confirmed for episode 2", created_at: new Date(Date.now() - 3600_000 * 12).toISOString() },
  ],
};

export default function CampaignDetailPage({ params }: Props) {
  const { id } = params;
  if (!id) return notFound();

  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-8">
        <SectionHeading
          eyebrow="Client Portal"
          title={mockCampaign.name}
          description={mockCampaign.summary}
        />

        <Card className="p-4 space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground">
              {mockCampaign.tier} tier
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[mockCampaign.status] || "bg-slate-100 text-slate-800"}`}>
              {mockCampaign.status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Campaign ID: {id}</p>
        </Card>

        <div className="grid lg:grid-cols-3 gap-4">
          <MilestoneList milestones={mockCampaign.milestones} />
          <ActivityFeed activities={mockCampaign.activity} />
        </div>
      </section>
    </main>
  );
}
