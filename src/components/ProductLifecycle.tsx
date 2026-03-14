import { StarIcon } from '@components/ui/SocialIcons';

const lifecycleSteps = [
  {
    title: 'Discovery',
    description: 'User problem understanding and friction mapping'
  },
  {
    title: 'Strategy',
    description: 'MVP definition and KPI selection'
  },
  {
    title: 'Execution',
    description: 'Product shipping and onboarding design'
  },
  {
    title: 'Measurement',
    description: 'Analytics instrumentation and adoption tracking'
  },
  {
    title: 'Iteration',
    description: 'Product decisions based on usage signals'
  }
];

export default function ProductLifecycle() {
  return (
    <section id="lifecycle" className="bg-white py-section relative border-t-punchy-lg border-black">
      <div className="container-google">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-display-lg text-text-primary font-black">
            Product Lifecycle Approach
          </h2>
          <StarIcon color="#FFD700" size={35} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifecycleSteps.map((step, i) => (
            <div 
              key={i}
              className="bg-vibrant-pink/5 border-punchy-md border-black rounded-card p-6 h-full hover:scale-102 transition-transform"
            >
              <h3 className="text-title-md font-black mb-3 flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-vibrant-pink text-black rounded-full text-sm border-2 border-black">
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
