/**
 * AgentHero Component - Large banner with overlaid text
 */

import type { Agent } from '@/types/agent'

interface AgentHeroProps {
  agent: Agent
}

export function AgentHero({ agent }: AgentHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Background banner image */}
      {agent.accentImageUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={agent.accentImageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
      )}

      {/* Hero text - centered and overlaid */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-sm md:text-base uppercase tracking-widest text-gray-300 mb-4">
          {agent.titlePrimary}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-white">{agent.firstName}</span>{' '}
          <span className="text-[#4EC4BE]">{agent.lastName}</span>
        </h1>
      </div>
    </section>
  )
}
