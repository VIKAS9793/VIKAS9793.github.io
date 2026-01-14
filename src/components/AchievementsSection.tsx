/**
 * Achievements Section - GDG Design Language
 * Showcasing Product Titans PM Challenge achievement with certificate
 */
export default function AchievementsSection() {
    // Use absolute path for deployed assets
    const certificateImage = '/images/certificate_of_excellence.jpg';
    return (
        <section
            id="achievements"
            className="bg-white py-section"
            aria-labelledby="achievements-heading"
        >
            <div className="container-google max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <h2 id="achievements-heading" className="text-display-xl text-text-primary mb-4">
                        Achievements & Certifications
                    </h2>
                    <p className="text-body-xl text-text-secondary max-w-2xl">
                        Recognition for product management excellence and professional certifications
                    </p>
                </div>

                {/* Product Titans Achievement Card - Featured */}
                <div className="bg-gradient-to-br from-google-blue/5 to-google-green/5 border-card-em border-google-blue/30 rounded-card p-8 mb-8">
                    <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">

                        {/* Left: Achievement Details */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-4 py-2 bg-google-blue text-white text-sm font-bold rounded-pill">
                                    🏆 FEATURED ACHIEVEMENT
                                </span>
                                <span className="px-3 py-1.5 bg-google-yellow/20 text-google-yellow border border-google-yellow/30 rounded-pill text-sm font-medium">
                                    Runner-up • Rank 2
                                </span>
                            </div>

                            <h3 className="text-display-lg text-text-primary mb-3">
                                Product Titans – National Product Management Challenge
                            </h3>

                            <p className="text-body-md text-text-secondary leading-relaxed mb-6">
                                Independent PM case study created for a national-level live project challenge hosted on
                                <strong> Unstop</strong> and organized by <strong>Book My Mentor</strong>. Built an India-first
                                agentic AI learning platform concept with problem framing, personas, journey mapping, RICE
                                prioritization, North Star metrics, experimentation plan, and responsible AI governance
                                (trust, explainability, privacy).
                            </p>

                            {/* Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-white border border-black/10 rounded-card p-3">
                                    <div className="text-2xl font-bold text-google-blue">Rank 2</div>
                                    <div className="text-xs text-text-secondary">National Rank</div>
                                </div>
                                <div className="bg-white border border-black/10 rounded-card p-3">
                                    <div className="text-2xl font-bold text-google-green">6.4</div>
                                    <div className="text-xs text-text-secondary">Score</div>
                                </div>
                                <div className="bg-white border border-black/10 rounded-card p-3">
                                    <div className="text-lg font-bold text-google-yellow">Solo</div>
                                    <div className="text-xs text-text-secondary">Team Type</div>
                                </div>
                                <div className="bg-white border border-black/10 rounded-card p-3">
                                    <div className="text-lg font-bold text-google-red">North Star Hunter</div>
                                    <div className="text-xs text-text-secondary">Team Name</div>
                                </div>
                            </div>

                            {/* Deliverables */}
                            <div className="mb-6">
                                <h4 className="text-body-lg font-semibold text-text-primary mb-3">Deliverables</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Personas', 'Journey Mapping', 'RICE Prioritization', 'North Star Metrics', 'GTM Strategy', 'Experimentation Plan', 'Responsible AI Governance'].map(deliverable => (
                                        <span
                                            key={deliverable}
                                            className="px-3 py-1.5 bg-white border border-google-blue/30 text-google-blue text-sm rounded-pill font-medium"
                                        >
                                            {deliverable}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://youtu.be/M_D3dxxZiqI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-pill-primary"
                                >
                                    Watch Case Study Walkthrough →
                                </a>
                            </div>
                        </div>

                        {/* Right: Certificate Image */}
                        <div className="flex flex-col items-center">
                            <img
                                src={certificateImage}
                                alt="Certificate of Excellence - Runner-up, Product Titans National PM Challenge"
                                className="w-full border-card-em border-black rounded-card shadow-card-hover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => window.open(certificateImage, '_blank')}
                            />
                            <p className="text-xs text-text-tertiary text-center mt-2">
                                Click to view full certificate
                            </p>
                        </div>

                    </div>
                </div>

                {/* Other Certifications - Compact Grid */}
                <div className="mt-12">
                    <h3 className="text-display-md text-text-primary mb-6">Professional Certifications</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-google-blue/10 border border-google-blue/30 rounded-card p-4">
                            <div className="text-2xl mb-2">🏆</div>
                            <h4 className="font-semibold text-text-primary text-sm mb-1">IBM AI Product Manager</h4>
                            <p className="text-xs text-text-secondary">IBM Professional Certificate</p>
                        </div>
                        <div className="bg-google-green/10 border border-google-green/30 rounded-card p-4">
                            <div className="text-2xl mb-2">🎯</div>
                            <h4 className="font-semibold text-text-primary text-sm mb-1">Google Project Management</h4>
                            <p className="text-xs text-text-secondary">Google Certificate</p>
                        </div>
                        <div className="bg-google-yellow/10 border border-google-yellow/30 rounded-card p-4">
                            <div className="text-2xl mb-2">🤖</div>
                            <h4 className="font-semibold text-text-primary text-sm mb-1">AI Agents & LLMs</h4>
                            <p className="text-xs text-text-secondary">DeepLearning.AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
