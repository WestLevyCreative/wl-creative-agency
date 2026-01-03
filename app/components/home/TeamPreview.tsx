 import { useAgents } from "@/hooks/useAgents";
import { ConsistentTeamSlider } from "./ConsistentTeamSlider";
import { transformAgentToTeamMember } from "@/lib/teamData";

export function TeamPreview() {
  const { agents, loading, error } = useAgents();
  const featured = agents.filter((agent) => agent.is_featured);
  const toDisplay = featured.length > 0 ? featured : agents.slice(0, 4);

  return (
    <ConsistentTeamSlider 
      teamMembers={toDisplay.map(transformAgentToTeamMember)}
      loading={loading}
      error={error}
      title="OUR TEAM"
      description="The West Levy Creative team brings together global strategists, journalists, designers, and digital innovators who unite editorial precision with creative intuition, delivering purpose-driven visibility, high-impact storytelling, and consistent media momentum for brands shaping culture across international markets."
      ctaText="Meet the Team"
      ctaLink="/who-we-are"
      showVerticalDots={false}
    />
  );
}
