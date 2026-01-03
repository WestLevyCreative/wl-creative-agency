/**
 * AgentAchievements Component - Detailed bio section
 * Image on RIGHT (40%), copy on LEFT (60%)
 */

import Image from 'next/image'
import type { Agent } from '@/types/agent'

interface AgentAchievementsProps {
  agent: Agent
  achievementImageUrl?: string
}

export function AgentAchievements({ agent, achievementImageUrl }: AgentAchievementsProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left column - Copy (60%) */}
          <div className="md:col-span-3 space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              {`Her expertise in media relations, crisis management, and influencer partnerships has positioned her as a go-to PR consultant for legal advocacy. She has worked directly with The Innocence Project Foundation, leading media outreach for wrongful conviction cases and shaping public perception on justice reform. Additionally, she was instrumental in the creation and launch of Jason Flom's Wrongful Conviction Podcast, which has been streamed millions of times and continues to influence the national conversation on criminal justice reform.`}
            </p>

            <p className="text-base md:text-lg">
              {`Heather has also spearheaded national marketing initiatives, including Nevada DMV's Real ID campaign, achieving a 31% increase in brand visibility as recently as 2023 – 2024 for DHS.`}
            </p>

            <p className="text-base md:text-lg">
              {`Recognized as a Top Woman in PR and the #1 PR Power Woman on Twitter, Heather's work reflects a deep understanding of audience behavior, emerging digital trends, and the power of authentic storytelling. Her strategic, data-driven approach to brand-building continues to drive high-impact PR campaigns that shape industries, influence change, and create lasting impact.`}
            </p>
          </div>

          {/* Right column - Image (40%) */}
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
              {achievementImageUrl ? (
                <Image
                  src={achievementImageUrl}
                  alt={`${agent.firstName} ${agent.lastName}`}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 480px, 90vw"
                />
              ) : (
                <div className="w-full aspect-[4/5] flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p className="text-sm uppercase tracking-widest">Achievement Photo</p>
                    <p className="text-xs mt-2">Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
