

const lifecycleSteps = [
  {
    title: 'Discovery',
    description: 'Identified a reliability gap in AI-generated Android code grounded in stale training data.'
  },
  {
    title: 'Strategy',
    description: 'Defined an MCP server that verifies Android guidance against live official documentation.'
  },
  {
    title: 'Execution',
    description: 'Shipped a CLI installer and VS Code extension, then expanded the release to 23 tools and 28 validator rules.'
  },
  {
    title: 'Measurement',
    description: 'Instrumented discovery, evaluation, and activation events while tracking public npm usage.'
  },
  {
    title: 'Iteration',
    description: 'Added content sanitization against indirect prompt injection and reduced shipped dependency vulnerabilities to zero.'
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
