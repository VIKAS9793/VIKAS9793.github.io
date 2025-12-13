import { useState } from 'react';
import type { HeroSectionProps, Stat } from '@types';
import PillButton from './ui/PillButton';
import { AsteriskShape, PuzzlePiece, QuoteShape } from './ui/PlayfulShapes';

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
          <svg className="w-3.5 h-3.5 text-text-tertiary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      className="bg-dev-gray relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Google Dev Style Playful Shapes */}

      {/* Top Left - Black Asterisk */}
      <div className="absolute top-12 left-12 hidden md:block">
        <AsteriskShape className="text-dev-black w-16 h-16" />
      </div>

      {/* Top Right - Red Rounded Pill */}
      <div className="absolute top-16 right-16 hidden md:block">
        <div className="w-52 h-14 bg-dev-red rounded-full shadow-lg" />
      </div>

      {/* Banner Image - Below red pill, with hover animation */}
      <div className="absolute top-36 right-8 hidden lg:block group">
        <div className="w-64 rounded-2xl overflow-hidden shadow-card border-2 border-white transition-all duration-300 ease-out group-hover:shadow-card-hover group-hover:scale-105 group-hover:-translate-y-1">
          <img
            src="/images/hero-banner.jpg"
            alt={`${personalInfo.name} - Banner`}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Left - Pink Quote */}
      <div className="absolute bottom-48 left-8 hidden lg:block">
        <QuoteShape className="text-dev-pink w-12 h-20" />
      </div>

      {/* Bottom Right - Pink Puzzle (moved to avoid overlap) */}
      <div className="absolute bottom-48 right-8 hidden md:block">
        <PuzzlePiece className="text-dev-pink w-20 h-20" />
      </div>

      <div className="container-google py-16 relative z-10">
        {/* Social Card Style Container */}
        <div className="max-w-2xl mx-auto lg:ml-16 mb-12">
          <div className="bg-white rounded-3xl border-2 border-ui-border shadow-card-hover p-6 md:p-8">
            {/* Profile Header - Just name, no fake handle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-google-blue via-google-green to-google-yellow flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <div className="font-semibold text-text-primary">{personalInfo.name}</div>
                <div className="text-sm text-text-secondary">{personalInfo.title}</div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium text-text-primary mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-ui-border">
              {stats.slice(0, 4).map((stat, index) => (
                <StatCard key={stat.id} stat={stat} color={colors[index % 4]} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons - moved up to avoid overlap with blob */}
        <div className="flex justify-center lg:justify-start lg:ml-16 gap-4 relative z-20">
          <PillButton variant="green" href="#projects">
            View Projects
          </PillButton>
          <PillButton variant="outline" href="#contact">
            Get in Touch
          </PillButton>
        </div>
      </div>

      {/* Red Blob - positioned at very bottom, behind content */}
      <div className="absolute bottom-4 left-1/3 hidden lg:block z-0">
        <div className="w-24 h-28 bg-dev-red rounded-tl-3xl rounded-tr-3xl rounded-br-[80px] rounded-bl-none shadow-md" />
      </div>
    </section>
  );
}
