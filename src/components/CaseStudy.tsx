import { useState } from 'react';
import PillButton from './ui/PillButton';

/**
 * Fintech Onboarding Clarity - Case Study
 * Sweet spot: Visual polish + Constraint-first structure
 */
export default function CaseStudy() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section id="case-study" className="section-white py-16">
            <div className="container-google max-w-4xl">
                {/* Header */}
                <div className="mb-10">
                    <span className="inline-block px-4 py-1.5 bg-google-blue/10 text-google-blue text-sm font-medium rounded-full mb-4">
                        Featured Case Study
                    </span>
                    <h2 className="text-4xl font-bold text-text-primary mb-3">
                        Fintech Onboarding Clarity
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Reducing user uncertainty in regulated fintech KYC flows through constraint-first design.
                    </p>
                </div>

                {/* Context Card */}
                <div className="mb-6 p-6 bg-section-lightgray rounded-2xl">
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                        <span className="w-7 h-7 bg-google-blue rounded-full flex items-center justify-center text-white text-sm">1</span>
                        Context
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        Digital onboarding in fintech operates under strict regulatory constraints.
                        Core verification systems are optimized for risk control, not user experience.
                        Users experience uncertainty during edge cases like verification retries.
                    </p>
                </div>

                {/* Constraints Card - THE KEY */}
                <div className="mb-6 p-6 bg-google-red/5 border border-google-red/20 rounded-2xl">
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                        <span className="w-7 h-7 bg-google-red rounded-full flex items-center justify-center text-white text-sm">2</span>
                        Constraints (Non-negotiable)
                    </h3>
                    <ul className="text-text-secondary space-y-2">
                        <li>• <strong>Regulatory:</strong> KYC/AML compliance cannot be compromised</li>
                        <li>• <strong>Technical:</strong> AI does not approve, reject, or override verification</li>
                        <li>• <strong>Business:</strong> Risk scoring logic is externally owned</li>
                        <li>• <strong>Non-goal:</strong> Not a redesign of verification systems themselves</li>
                    </ul>
                </div>

                {/* Problem Framing Card */}
                <div className="mb-6 p-6 bg-section-lightgray rounded-2xl">
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                        <span className="w-7 h-7 bg-google-green rounded-full flex items-center justify-center text-white text-sm">3</span>
                        Problem Framing
                    </h3>
                    <div className="text-text-secondary space-y-2">
                        <p><strong>What's broken:</strong> Users don't understand why verification failed or what to do next.</p>
                        <p><strong>What's not broken:</strong> The verification system itself works correctly.</p>
                        <p><strong>Ambiguity:</strong> We don't have actual drop-off rates or failure distribution data.</p>
                    </div>
                </div>

                {/* Expandable Details */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full py-3 text-center border border-ui-border rounded-xl text-text-primary font-medium hover:bg-section-lightgray transition-colors mb-6"
                >
                    {showDetails ? 'Hide Details ↑' : 'Show Decision, Outcome & Artifacts ↓'}
                </button>

                {showDetails && (
                    <div className="space-y-6 animate-fade-in">
                        {/* Decision Card */}
                        <div className="p-6 bg-section-lightgray rounded-2xl">
                            <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                                <span className="w-7 h-7 bg-google-yellow rounded-full flex items-center justify-center text-text-primary text-sm">4</span>
                                Decision & Trade-offs
                            </h3>
                            <p className="text-text-secondary leading-relaxed mb-3">
                                Proposed a lightweight AI-assisted guidance layer that provides
                                contextual help during verification, without touching decision logic.
                            </p>
                            <p className="text-text-secondary">
                                <strong>Trade-off accepted:</strong> Limited scope (guidance only) in exchange for
                                regulatory safety and faster validation.
                            </p>
                        </div>

                        {/* Outcome Card */}
                        <div className="p-6 bg-google-green/5 border border-google-green/20 rounded-2xl">
                            <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                                <span className="w-7 h-7 bg-google-green rounded-full flex items-center justify-center text-white text-sm">5</span>
                                Outcome (Learning-focused)
                            </h3>
                            <p className="text-text-secondary leading-relaxed mb-3">
                                <strong>Key insight:</strong> Constraint discovery was more valuable than solution design.
                                In regulated environments, knowing what you <em>can't</em> do is often more valuable
                                than knowing what you <em>could</em> do.
                            </p>
                            <p className="text-text-secondary">
                                <strong>Next validation:</strong> Actual drop-off rates, failure category distribution,
                                support ticket analysis.
                            </p>
                        </div>

                        {/* Artifacts */}
                        <div className="p-6 bg-section-lightgray rounded-2xl">
                            <h3 className="text-lg font-semibold text-text-primary mb-3">Artifacts</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="p-3 bg-white rounded-xl text-center">
                                    <div className="text-2xl mb-1">📋</div>
                                    <div className="text-sm text-text-secondary">PRD</div>
                                </div>
                                <div className="p-3 bg-white rounded-xl text-center">
                                    <div className="text-2xl mb-1">🚧</div>
                                    <div className="text-sm text-text-secondary">Constraints</div>
                                </div>
                                <div className="p-3 bg-white rounded-xl text-center">
                                    <div className="text-2xl mb-1">📊</div>
                                    <div className="text-sm text-text-secondary">Metrics</div>
                                </div>
                                <div className="p-3 bg-white rounded-xl text-center">
                                    <div className="text-2xl mb-1">⚠️</div>
                                    <div className="text-sm text-text-secondary">Risks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-ui-border">
                    <PillButton
                        variant="primary"
                        href="https://github.com/VIKAS9793/Fintech-Onboarding-Clarity"
                        external
                    >
                        View Full Case Study
                    </PillButton>
                    <PillButton
                        variant="green"
                        href="https://youtu.be/eSpfY1qSvQc"
                        external
                    >
                        Watch Video Pitch
                    </PillButton>
                </div>
            </div>
        </section>
    );
}
