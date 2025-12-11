import type { HeroSectionProps } from '@types';
import PillButton from './ui/PillButton';

export default function Hero({ personalInfo, stats }: HeroSectionProps) {
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

        {/* Stats Grid with DevFest Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
          {stats.slice(0, 4).map((stat, index) => {
            const colors = ['text-google-blue', 'text-google-green', 'text-google-yellow', 'text-google-red'];
            return (
              <div key={stat.id} className="text-center group hover:scale-105 transition-transform cursor-default">
                <div className={`text-2xl md:text-3xl font-bold ${colors[index % 4]}`}>{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

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
