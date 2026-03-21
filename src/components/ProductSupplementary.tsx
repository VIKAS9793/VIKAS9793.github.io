

export function MeasurementSection() {
  return (
    <section id="measurement" className="bg-surface-container py-section relative border-t border-outline-variant section-reveal">
      <div className="container-google">
        <div className="mb-8">
          <h2 className="text-display-lg text-primary font-medium">
            Product Measurement & Analytics
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['GA4 Behavioural Event Taxonomy', 'Discovery to Activation Funnel', 'Channel Attribution: Reddit, npm, and direct', 'Weekly Download Velocity KPI'].map((item, i) => (
            <div key={i} className="bg-primary-container rounded-2xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow">
              <p className="text-body-lg font-medium text-on-primary-container">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DistributionSection() {
  return (
    <section id="distribution" className="bg-surface-container-low py-section relative border-t border-outline-variant section-reveal">
      <div className="container-google">
        <div className="mb-8 relative">
          <div className="mb-2">
            <h2 className="text-display-lg text-primary font-medium">
              Product Distribution
            </h2>
          </div>
          <p className="text-body-lg text-on-surface-variant font-medium">
            Distribution strategy focused on developer discovery channels.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'PulseMCP Registry',
              desc: 'Day-1 listing as primary distribution channel. Top-40 global weekly ranking achieved within 15 days of launch.'
            },
            {
              title: 'npm Registry',
              desc: '240 weekly downloads. CLI installer enables one-command setup across 7 AI coding environments.'
            },
            {
              title: 'VS Code Marketplace',
              desc: '59 installs. Extension enables direct activation from within the IDE.'
            },
            {
              title: 'Reddit Community',
              desc: 'Primary organic acquisition engine. 74 unique referrals. Terminal-first growth pattern validated.'
            }
          ].map((card, i) => (
            <div key={i} className="bg-primary-container rounded-2xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow">
              <h4 className="text-lg font-medium text-on-primary-container mb-2">{card.title}</h4>
              <p className="text-sm font-medium text-on-primary-container/80 leading-tight">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
