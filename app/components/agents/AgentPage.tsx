/**
 * AgentPage Composer - REDESIGNED to match reference
 */

import type { Agent } from '@/types/agent'
import { AgentHero } from './AgentHero'
import { AgentContent } from './AgentContent'
import { AgentAchievements } from './AgentAchievements'
import { AgentExpertise } from './AgentExpertise'
import { TeamPreview } from '@/components/home/TeamPreview'

interface AgentPageProps {
  agent: Agent
  agents: Agent[]
}

export function AgentPage({ agent, agents }: AgentPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <AgentHero agent={agent} />
      <AgentContent agent={agent} />
      <AgentAchievements agent={agent} achievementImageUrl={agent.achievementImageUrl} />
      <AgentExpertise agent={agent} expertiseImageUrl={agent.expertiseImageUrl} />
      <TeamPreview />
    </div>
  )
}
