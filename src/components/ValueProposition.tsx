import { SparkleShape } from './ui/PlayfulShapes';


/**
 * Value Proposition - "What I'm Best At" section
 * Crystallizes positioning for busy recruiters
 */
export default function ValueProposition() {
    const strengths = [
        {
            title: 'AI Product Design',
            description: 'Translating business problems into LLM-powered solutions with measurable ROI',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'bg-primary'
        },
        {
            title: 'System Architecture',
            description: 'Building reliable GenAI systems with guardrails, evaluation frameworks, and monitoring',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            color: 'bg-vibrant-green'
        },
        {
            title: 'Execution Velocity',
            description: 'Shipping MVPs in weeks, not months, while maintaining enterprise-grade quality',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: 'bg-vibrant-yellow'
        },
        {
            title: 'Outcome-Driven Delivery',
            description: 'Every feature tied to a metric that matters: accuracy, latency, satisfaction, compliance',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: 'bg-vibrant-red'
        }
    ];

    return (
        <section id="value-prop" className="bg-surface py-20 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/50 to-surface" />

            <div className="container-google relative z-10">
                {/* Header with Playful Design Pill */}
                <div className="text-center mb-16 relative">
                    {/* Playful Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-on-primary shadow-lg mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                        <SparkleShape className="w-4 h-4 text-vibrant-yellow" />
                        <span className="font-display font-bold tracking-wide text-sm uppercase">My Expertise</span>
                    </div>

                    {/* Main Title - Playful Font Style */}
                    <div className="relative inline-block">
                        <h2 className="heading-playful text-5xl md:text-6xl font-display font-extrabold tracking-tight text-on-surface relative z-10">
                            What I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-vibrant-red to-vibrant-yellow">Best At</span>
                        </h2>

                        {/* Decorative Sparkle */}
                        <div className="absolute -top-6 -right-8 animate-pulse hidden md:block">
                            <SparkleShape className="w-10 h-10 text-google-yellow" />
                        </div>
                    </div>

                    <p className="body-large max-w-2xl mx-auto mt-6 text-lg text-on-surface-variant leading-relaxed">
                        I excel at building AI-as-product systems, aligning LLMs, RAG, and agentic workflows with user needs, regulatory constraints, and business goals to deliver reliable, production-grade AI products.
                    </p>
                </div>

                {/* Strengths Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                    {strengths.map((item) => (
                        <div
                            key={item.title}
                            className="p-6 bg-surface-container-low rounded-xl border border-outline-variant hover:shadow-elevation-2 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-on-surface mb-3 font-display">{item.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Proof Statement - Enhanced Design */}
                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-vibrant-red/5 to-vibrant-yellow/5 rounded-3xl transform -rotate-1 skew-y-1 scale-105" />
                    <div className="relative p-8 bg-surface-container-high rounded-2xl shadow-xl overflow-hidden group">
                        {/* Background glow effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-vibrant-red to-vibrant-yellow opacity-50" />

                        <p className="text-on-surface-inverse text-xl md:text-2xl font-medium leading-relaxed">
                            I thrive in the{' '}
                            <span className="text-primary font-bold px-1 relative inline-block">
                                0 → 1 phase
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/50" />
                            </span>
                            where ambiguity is high, the right questions matter most, and{' '}
                            <span className="text-vibrant-green font-bold px-1 relative inline-block">
                                disciplined scope decisions
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrant-green/50" />
                            </span>{' '}
                            determine success. I care less about deploying AI for novelty, and more about whether it{' '}
                            <span className="text-vibrant-yellow font-bold px-1 relative inline-block">
                                meaningfully improves outcomes
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrant-yellow/50" />
                            </span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
