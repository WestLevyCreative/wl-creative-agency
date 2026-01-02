import { SectionHeading } from "@/components/SectionHeading";
import { CampaignCard } from "@/components/client/CampaignCard";
import { ActivityFeed } from "@/components/client/ActivityFeed";
import { MilestoneList } from "@/components/client/MilestoneList";

export const metadata = {
  title: "Client Dashboard | West Levy Creative",
  description: "Partner dashboard for campaigns and billing.",
};

const campaigns = [
  {
    id: "cmp-001",
    name: "Podcast Launch & Media Tour",
    status: "active",
    tier_id: "Signature",
    assigned_agent: { first_name: "Heather", last_name: "Wing" },
    milestones: [
      { status: "completed" },
      { status: "completed" },
      { status: "in_progress" },
      { status: "pending" },
    ],
  },
  {
    id: "cmp-002",
    name: "Brand Authority Sprint",
    status: "in_progress",
    tier_id: "Accelerate",
    assigned_agent: { first_name: "Marklen", last_name: "Kennedy" },
    milestones: [
      { status: "completed" },
      { status: "in_progress" },
      { status: "pending" },
    ],
  },
];

const activity = [
  { id: "act-1", activity_type: "milestone", title: "Press release draft approved", description: "Ready for distribution to top-tier outlets.", created_at: new Date().toISOString() },
  { id: "act-2", activity_type: "document", title: "Media list uploaded", description: "Curated list for launch week outreach.", created_at: new Date(Date.now() - 3600_000 * 5).toISOString() },
  { id: "act-3", activity_type: "note", title: "Recording scheduled", description: "Podcast recording set for next Tuesday.", created_at: new Date(Date.now() - 3600_000 * 24).toISOString() },
];

const milestones = [
  { id: "m-1", title: "Messaging guide", description: "Finalize narrative and talking points.", status: "completed" },
  { id: "m-2", title: "Press kit", description: "Assets for outreach and bookings.", status: "in_progress" },
  { id: "m-3", title: "Launch podcast episode", status: "pending" },
];

export default function ClientDashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom space-y-8">
        <SectionHeading
          eyebrow="Client Portal"
          title="Dashboard"
          description="Overview of your campaigns, billing, and activity."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <ActivityFeed activities={activity} />
          <MilestoneList milestones={milestones} />
        </div>
      </section>
    </main>
  );
}
