import { useState } from 'react';
import type { HeroSectionProps, Stat } from '@types';
import PillButton from './ui/PillButton';

/**
 * Tooltip component for stat context - prevents "made-up numbers" perception
 */
function StatTooltip({ stat, color, isVisible }: { stat: Stat; color: string; isVisible: boolean }) {
  return (
    <div
      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 p-4 bg-white rounded-2xl shadow-xl border border-ui-border z-20 transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
    >
      {/* Arrow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-ui-border rotate-45" />

      {/* Content */}
      <div className={`text-2xl font-bold ${color} mb-1`}>{stat.value}</div>
      <div className="text-sm font-medium text-text-primary mb-2">{stat.label}</div>
      <p className="text-xs text-text-secondary leading-relaxed">{stat.description}</p>
    </div>
  );
}

/**
 * Individual Stat Card with hover tooltip
 */
function StatCard({ stat, color }: { stat: Stat; color: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative text-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <StatTooltip stat={stat} color={color} isVisible={isHovered} />

      {/* Stat Display */}
      <div className="hover:scale-105 transition-transform">
        <div className={`text-2xl md:text-3xl font-bold ${color}`}>{stat.value}</div>
        <div className="text-text-secondary text-sm flex items-center justify-center gap-1">
          {stat.label}
          <svg className="w-3.5 h-3.5 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ personalInfo, stats }: HeroSectionProps) {
  const colors = ['text-google-blue', 'text-google-green', 'text-google-yellow', 'text-google-red'];

  return (
    <section
      id="hero"
      className="section-white relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* DevFest Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-google-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-google-green/10 rounded-full blur-2xl translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-google-yellow/10 rounded-full blur-2xl translate-y-1/2" />

      <div className="container-google py-12 relative z-10">
        {/* Material 3 Pill Container for Banner */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="rounded-[32px] overflow-hidden shadow-card-hover border-4 border-white">
            <img
              src="/images/hero-banner.jpg"
              alt={`${personalInfo.name} - ${personalInfo.title}`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Stats Grid with Tooltips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
          {stats.slice(0, 4).map((stat, index) => (
            <StatCard key={stat.id} stat={stat} color={colors[index % 4]} />
          ))}
        </div>

        {/* Tooltip hint */}
        <p className="text-center text-xs text-text-tertiary mb-6">
          Hover over metrics for context
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <PillButton variant="green" href="#projects">
            View Projects
          </PillButton>
          <PillButton variant="outline" href="#contact">
            Get in Touch
          </PillButton>
        </div>
      </div>
    </section>
  );
}
