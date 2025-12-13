import { useState } from 'react';
import PillButton from './ui/PillButton';

/**
 * Netflix India PM Case Study - Full narrative page
 * Differentiating portfolio piece with depth
 */
export default function CaseStudy() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="case-study" className="section-white py-16">
            <div className="container-google max-w-4xl">
                {/* Header */}
                <div className="mb-12">
                    <span className="inline-block px-4 py-1.5 bg-google-red/10 text-google-red text-sm font-medium rounded-full mb-4">
                        Featured Case Study
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Netflix India PM Case Study
                    </h2>
                    <p className="text-xl text-text-secondary">
                        Comprehensive product management research methodology demonstrating strategic framework application
                    </p>
                </div>

                {/* The Problem */}
                <div className="mb-12 p-6 bg-section-cream rounded-2xl">
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-google-red rounded-full flex items-center justify-center text-white text-sm">1</span>
                        The Problem
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                            <span className="text-google-red mt-1">•</span>
                            Regional content performance varies significantly across Indian markets
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-google-red mt-1">•</span>
                            Subscription churn in tier-2/3 cities exceeds metro averages by 23%
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-google-red mt-1">•</span>
                            Content discovery friction leads to 40% abandonment in first session
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-google-red mt-1">•</span>
                            Limited data on regional viewing preferences for local content strategy
                        </li>
                    </ul>
                </div>

                {/* My Role */}
                <div className="mb-12 p-6 bg-section-lightgray rounded-2xl">
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-google-blue rounded-full flex items-center justify-center text-white text-sm">2</span>
                        My Role & Approach
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-google-blue font-bold text-lg">PM Researcher</div>
                            <div className="text-text-secondary text-sm">Strategic Analysis Lead</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-google-green font-bold text-lg">6+ Frameworks</div>
                            <div className="text-text-secondary text-sm">RICE, JTBD, OKRs, Porter's 5</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-google-yellow font-bold text-lg">Data-Driven</div>
                            <div className="text-text-secondary text-sm">Verified Sources Only</div>
                        </div>
                    </div>
                </div>

                {/* Methodology */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-google-green rounded-full flex items-center justify-center text-white text-sm">3</span>
                        Research Methodology
                    </h3>
                    <div className="space-y-4">
                        <div className="p-5 border border-ui-border rounded-xl hover:shadow-card transition-shadow">
                            <h4 className="font-semibold text-text-primary mb-2">Data Quality Audit</h4>
                            <p className="text-text-secondary text-sm">
                                Rigorous verification of all data sources with confidence scoring (0.62/1.00).
                                All unverified claims flagged with uncertainty indicators.
                            </p>
                        </div>
                        <div className="p-5 border border-ui-border rounded-xl hover:shadow-card transition-shadow">
                            <h4 className="font-semibold text-text-primary mb-2">RICE Framework Application</h4>
                            <p className="text-text-secondary text-sm">
                                Prioritization of feature recommendations using Reach, Impact, Confidence, Effort scoring
                                with documented assumptions and sensitivity analysis.
                            </p>
                        </div>
                        <div className="p-5 border border-ui-border rounded-xl hover:shadow-card transition-shadow">
                            <h4 className="font-semibold text-text-primary mb-2">Jobs-to-be-Done Analysis</h4>
                            <p className="text-text-secondary text-sm">
                                Mapped user personas across metro and tier-2/3 segments, identifying distinct
                                content discovery needs and viewing behavior patterns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Insights */}
                <div className="mb-12 p-6 bg-section-blue rounded-2xl">
                    <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-google-blue rounded-full flex items-center justify-center text-white text-sm">4</span>
                        Key Insights & Recommendations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-4xl font-bold text-google-blue mb-1">23%</div>
                            <div className="text-text-secondary text-sm">Higher churn in tier-2/3 cities vs metros</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-4xl font-bold text-google-green mb-1">40%</div>
                            <div className="text-text-secondary text-sm">First-session abandonment rate</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-4xl font-bold text-google-yellow mb-1">6+</div>
                            <div className="text-text-secondary text-sm">Strategic frameworks applied</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="text-4xl font-bold text-google-red mb-1">0.62</div>
                            <div className="text-text-secondary text-sm">Data verification confidence score</div>
                        </div>
                    </div>
                </div>

                {/* Expandable Technical Detail */}
                {isExpanded && (
                    <div className="mb-12 animate-fade-in">
                        <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-google-yellow rounded-full flex items-center justify-center text-white text-sm">5</span>
                            Technical Deep Dive
                        </h3>
                        <div className="p-6 bg-section-dark rounded-2xl text-white">
                            <h4 className="font-semibold mb-3">Framework Application Summary</h4>
                            <div className="space-y-3 text-sm font-mono">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <span className="text-google-blue">RICE Score:</span> Reach × Impact × Confidence / Effort
                                </div>
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <span className="text-google-green">OKRs:</span> Objective = Improve regional retention | KR1 = Reduce churn by 15%
                                </div>
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <span className="text-google-yellow">JTBD:</span> "When I want entertainment, I want content in my language"
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Expand/Collapse */}
                <div className="text-center mb-8">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="px-6 py-3 border-2 border-ui-border rounded-full text-text-primary font-medium hover:bg-section-lightgray transition-colors"
                    >
                        {isExpanded ? 'Show Less' : 'Show Technical Details'}
                    </button>
                </div>

                {/* Lessons Learned */}
                <div className="mb-12 p-6 border-l-4 border-google-green bg-section-lightgray rounded-r-2xl">
                    <h3 className="text-xl font-bold text-text-primary mb-4">Lessons Learned</h3>
                    <ol className="space-y-2 text-text-secondary list-decimal list-inside">
                        <li><strong>Uncertainty is valuable:</strong> Flagging low-confidence data builds trust</li>
                        <li><strong>Frameworks prevent bias:</strong> Structured analysis reveals blind spots</li>
                        <li><strong>Regional nuance matters:</strong> One-size-fits-all fails in diverse markets</li>
                    </ol>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap justify-center gap-4">
                    <PillButton
                        variant="primary"
                        href="https://github.com/VIKAS9793/netflix-india-pm-case-study"
                        external
                    >
                        View Full Case Study
                    </PillButton>
                    <PillButton variant="outline" href="#projects">
                        Back to Projects
                    </PillButton>
                </div>
            </div>
        </section>
    );
}
