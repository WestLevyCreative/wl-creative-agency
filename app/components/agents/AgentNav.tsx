/**
 * AgentNav Component
 *
 * System-owned navigation.
 * Agents NEVER control order or visibility.
 *
 * - Active agent highlighted in gold
 * - Names only
 * - No avatars unless global decision
 */

import Link from 'next/link'
import type { Agent } from '@/types/agent'

interface AgentNavProps {
  agents: Agent[]
  currentId: string
}

export function AgentNav({ agents, currentId }: AgentNavProps) {
  // Filter active agents and sort by display order
  const activeAgents = agents
    .filter(a => a.isActive)
    .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))

  return (
    <section className="agent-nav">
      <div className="agent-nav__title">Our Team</div>
      <ul className="agent-nav__list">
        {activeAgents.map(agent => (
          <li key={agent.id} className="agent-nav__item">
            <Link
              href={`/team/${agent.firstName.toLowerCase()}-${agent.lastName.toLowerCase()}`}
              className={agent.id === currentId ? 'active' : ''}
            >
              {agent.firstName} {agent.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
