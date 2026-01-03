import { TeamMember } from "./ConsistentTeamSlider";
import { CarouselAgent } from "./TeamCarousel";

export function transformAgentToTeamMember(agent: CarouselAgent): TeamMember {
  return {
    id: agent.id,
    slug: agent.slug,
    name: `${agent.first_name} ${agent.last_name}`,
    role: agent.role_title || "Agent",
    imageSrc: pickImage(agent.media) || "/images/placeholder.svg",
    profileLink: `/who-we-are/${agent.slug}`,
    shortBio: "Agent profile coming soon",
    expertise: []
  };
}

export function transformTeamMemberToTeamMember(member: any): TeamMember {
  return {
    id: member.id,
    slug: member.slug,
    name: member.name || `${member.firstName || ''} ${member.lastName || ''}`.trim(),
    role: member.role || member.role_title || "Team Member",
    imageSrc: member.image || "/images/placeholder.svg",
    profileLink: `/who-we-are/${member.slug}`,
    shortBio: member.shortBio || "Team member profile coming soon",
    expertise: member.expertise || []
  };
}

function pickImage(media?: { url: string; type: string; is_primary?: boolean; sort_order?: number }[]): string | null {
  if (!media || media.length === 0) return null;

  // Filter for portrait type images only
  const portraits = media.filter(m => m.type === 'portrait');
  if (portraits.length === 0) return null;

  // Sort by primary first, then sort_order
  const sorted = [...portraits].sort((a, b) => {
    const primaryA = a.is_primary ? 0 : 1;
    const primaryB = b.is_primary ? 0 : 1;
    const orderA = a.sort_order ?? 0;
    const orderB = b.sort_order ?? 0;
    return primaryA - primaryB || orderA - orderB;
  });
  return sorted[0]?.url || null;
}