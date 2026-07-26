

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
          {['GA4 behavioural event taxonomy', 'Discovery to activation funnel', 'Public npm usage tracking', 'Launch-window acquisition analysis'].map((item, i) => (
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
              title: 'MCP Registry',
              desc: 'Published distribution channel for the AndroJack MCP server.'
            },
            {
              title: 'npm Registry',
              desc: '110 weekly and 813 monthly downloads in the current verified snapshot.'
            },
            {
              title: 'Launch Window',
              desc: '660 GitHub clones, 251 unique cloners, and 179 visitors in the first 14 days.'
            },
            {
              title: 'Release Quality',
              desc: 'Current release v2.0.0 has 23 tools, 28 validator rules, and zero known vulnerabilities.'
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
