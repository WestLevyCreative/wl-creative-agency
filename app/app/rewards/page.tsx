import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Rewards | West Levy Creative",
  description: "Partner rewards for referrals and long-term collaboration.",
};

const rewards = [
  {
    title: "Referral Credit",
    detail: "10% service credit on the first three months of any partner you refer.",
  },
  {
    title: "Priority Placement",
    detail: "Featured placement in media outreach calendars for top referrers.",
  },
  {
    title: "Quarterly Strategy Session",
    detail: "Invite-only deep dives with our strategy team for long-term partners.",
  },
];

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding container-custom">
        <SectionHeading
          eyebrow="Rewards"
          title="Partner Rewards"
          description="A thank you to the partners and collaborators who help us build what’s next."
          align="center"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div key={reward.title} className="p-6 rounded-xl border border-border bg-card/50">
              <h3 className="text-lg font-semibold text-foreground">{reward.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reward.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
