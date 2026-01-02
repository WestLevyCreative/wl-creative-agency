/**
 * AgentExpertise Component - "Where I Excel" section with 40/60 split
 */

import type { Agent } from '@/types/agent'

interface AgentExpertiseProps {
  agent: Agent
  expertiseImageUrl?: string
}

export function AgentExpertise({ agent, expertiseImageUrl }: AgentExpertiseProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left column - Image (40%) */}
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              {expertiseImageUrl ? (
                <img
                  src={expertiseImageUrl}
                  alt={`${agent.firstName} ${agent.lastName} expertise`}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/5] flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p className="text-sm uppercase tracking-widest">Expertise Photo</p>
                    <p className="text-xs mt-2">Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Content (60%) */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                Where I Excel
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                PR Strategy, Media Relations & Brand Leadership
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                With over 20 years of experience in public relations, media strategy, and branding, {agent.firstName} {agent.lastName} is a highly sought-after PR strategist known for crafting compelling narratives and executing high-impact, media-driven campaigns. She has secured media placements in Forbes, Rolling Stone, Billboard, Fox News, The Washington Post, The Wall Street Journal, The New York Post, LA Times, The New York Times, PR Week, and more.
              </p>

              <p className="text-base md:text-lg">
                As the Co-Founder of West Levy PR (later merged to West Wing Agency with her husband, Brenden Wing), {agent.firstName} has led branding, publicity, and digital strategies for high-profile clients, legal advocacy groups, and Fortune 500 brands, delivering results-driven campaigns that elevated brand visibility by over 42%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
