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
            color: 'bg-google-blue'
        },
        {
            title: 'System Architecture',
            description: 'Building reliable GenAI systems with guardrails, evaluation frameworks, and monitoring',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            color: 'bg-google-green'
        },
        {
            title: 'Execution Velocity',
            description: 'Shipping MVPs in weeks, not months, while maintaining enterprise-grade quality',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: 'bg-google-yellow'
        },
        {
            title: 'Outcome-Driven Delivery',
            description: 'Every feature tied to a metric that matters: accuracy, latency, satisfaction, compliance',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: 'bg-google-red'
        }
    ];

    return (
        <section id="value-prop" className="section-white py-16 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-section-lightgray/50 to-white" />

            <div className="container-google relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="title-section mb-4">
                        What I'm Best At
                    </h2>
                    <p className="body-large max-w-2xl mx-auto">
                        I excel at building AI-as-product systems—aligning LLMs, RAG, and agentic workflows with user needs, regulatory constraints, and business goals to deliver reliable, production-grade AI products.
                    </p>
                </div>

                {/* Strengths Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                    {strengths.map((item) => (
                        <div
                            key={item.title}
                            className="p-6 bg-white rounded-2xl border border-ui-border hover:shadow-card-hover transition-all group"
                        >
                            <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                            <p className="text-text-secondary text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Proof Statement */}
                <div className="text-center p-6 bg-section-dark rounded-2xl max-w-3xl mx-auto">
                    <p className="text-white text-lg">
                        I've deployed AI systems processing{' '}
                        <span className="text-google-blue font-bold">₹100Cr+</span> in assets,
                        serving <span className="text-google-green font-bold">50K+ users</span>,
                        with <span className="text-google-yellow font-bold">94%+ accuracy</span> in production.
                    </p>
                </div>
            </div>
        </section>
    );
}
