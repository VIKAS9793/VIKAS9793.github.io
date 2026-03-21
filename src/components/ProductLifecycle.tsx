

const lifecycleSteps = [
  {
    title: 'Discovery',
    description: 'Identified reliability gap in AI Android tooling through developer trust signal analysis'
  },
  {
    title: 'Strategy',
    description: 'Defined MCP as category position over RAG or prompt engineering alternatives and set Weekly Active Installs as the North Star metric'
  },
  {
    title: 'Execution',
    description: 'Shipped v1.0 to v1.6.4 across 7 AI environments with CLI installer and VS Code extension across 4 iteration cycles in 2 weeks'
  },
  {
    title: 'Measurement',
    description: 'Instrumented GA4 funnel with behavioural event taxonomy across discovery, evaluation, and activation stages'
  },
  {
    title: 'Iteration',
    description: 'Deprioritised feature expansion in v1.4 to v1.6 in favour of onboarding reliability based on cross-platform drop-off signals'
  }
];

export default function ProductLifecycle() {
  return (
    <section id="lifecycle" className="bg-surface-container-low py-section relative border-t border-outline-variant section-reveal">
      <div className="container-google">
        <div className="mb-12">
          <h2 className="text-display-lg text-primary font-medium">
            Product Lifecycle Approach
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifecycleSteps.map((step, i) => (
            <div 
              key={i}
              className="bg-primary-container rounded-2xl shadow-elevation-1 p-6 h-full hover:shadow-elevation-2 transition-shadow"
            >
              <h3 className="text-title-md font-medium mb-3 flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-primary-container text-black rounded-full text-sm font-medium">
                  {i + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-body-md text-on-surface-variant font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
