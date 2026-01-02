/**
 * AgentContent Component - Profile intro section
 * Layout: Social sidebar (left) | Image (center) | Content (right)
 */

import type { Agent } from '@/types/agent'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AgentContentProps {
  agent: Agent
}

export function AgentContent({ agent }: AgentContentProps) {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left sidebar - Social Media (vertical text) */}
          <div className="col-span-1 flex flex-col items-center justify-between">
            <div className="writing-mode-vertical text-xs uppercase tracking-widest text-gray-500">
              <span className="transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                {`Agent's Social Media`}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="w-px h-12 bg-gray-700"></div>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="text-[8px] uppercase text-gray-700 mt-auto" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Needs Database Mapping
            </div>
          </div>

          {/* Center - Image */}
          <div className="col-span-5">
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-full bg-gradient-to-br from-gray-800 to-gray-900">
              {agent.headshotUrl ? (
                <img
                  src={agent.headshotUrl}
                  alt={`${agent.firstName} ${agent.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p className="text-sm uppercase tracking-widest">Profile Photo</p>
                    <p className="text-xs mt-2">Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right - Content */}
          <div className="col-span-6 flex flex-col justify-center space-y-6">
            {/* Agent's Name (small label) */}
            <p className="text-xs uppercase tracking-widest text-gray-400">
              {`Agent's Name`}
            </p>

            {/* Agent's Role (large heading) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">{agent.firstName.toUpperCase()}{`'S `}</span>
              <span className="text-[#4EC4BE]">ROLE</span>
            </h1>

            {/* Right-side vertical text for credentials */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="text-[8px] uppercase text-gray-700" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                {`Agent's Credentials/Also Promoted 1 (if) Built!!!`}
              </div>
            </div>

            {/* Bio text */}
            {agent.shortDescriptor && (
              <p className="text-base md:text-lg leading-relaxed text-white uppercase tracking-wide">
                {agent.shortDescriptor}
              </p>
            )}

            {/* Download Section */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <p className="text-sm uppercase text-white">
                  {`Download My: `}<span className="text-gray-500">{`(Agent's Uploaded PDF Name e.g. Resume)`}</span>
                </p>
                <span className="text-[10px] text-gray-700">{'<--- NEEDS DATABASE MAPPING'}</span>
              </div>

              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
