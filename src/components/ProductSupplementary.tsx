import { StarIcon } from '@components/ui/SocialIcons';

export function MeasurementSection() {
  return (
    <section id="measurement" className="bg-white py-section relative border-t-punchy-md border-black">
      <div className="container-google">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-display-lg text-text-primary font-black">
            Product Measurement & Analytics
          </h2>
          <StarIcon color="#FF69B4" size={35} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Install intent events', 'User onboarding funnels', 'Feature adoption tracks', 'Decision-ready dashboards'].map((item, i) => (
            <div key={i} className="bg-vibrant-cyan/5 border-punchy-sm border-black rounded-card p-6 hover:shadow-md transition-shadow">
              <p className="text-body-lg font-black text-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DistributionSection() {
  return (
    <section id="distribution" className="bg-vibrant-light-beige py-section relative border-t-punchy-md border-black">
      <div className="container-google">
        <div className="mb-8 relative">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-display-lg text-text-primary font-black">
              Product Distribution
            </h2>
            <StarIcon color="#00D4FF" size={35} />
          </div>
          <p className="text-body-lg text-text-secondary font-bold">
            Distribution strategy focused on developer discovery channels.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'VS Code Marketplace', desc: 'Primary install channel for developer adoption.' },
            { title: 'npm Registry Distribution', desc: 'CLI distribution channel.' },
            { title: 'GitHub Repository', desc: 'Source access and documentation distribution.' },
            { title: 'Product Measurement', desc: 'GA4 tracking for discovery and install signals.' }
          ].map((card, i) => (
            <div key={i} className="bg-vibrant-orange/5 border-punchy-sm border-black rounded-card p-6 hover:shadow-md transition-shadow">
              <h4 className="text-lg font-black text-black mb-2">{card.title}</h4>
              <p className="text-sm font-bold text-text-secondary leading-tight">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
