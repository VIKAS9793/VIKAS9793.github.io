

/**
 * Achievements Section - Vibrant Design
 * Showcasing Product Titans PM Challenge achievement with certificate
 */
export default function AchievementsSection() {
    // Use absolute path for deployed assets
    const certificateImage = '/images/certificate_of_excellence.jpg';
    return (
        <section
            id="achievements"
            className="bg-surface-container py-section relative section-reveal"
            aria-labelledby="achievements-heading"
        >
            <div className="container-google max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="mb-4">
                        <h2 id="achievements-heading" className="text-display-xl text-primary font-medium">
                            Recognition
                        </h2>
                    </div>
                    <p className="text-lg text-text-secondary max-w-2xl font-semibold">
                        National PM competition recognition and professional certifications
                    </p>
                </div>

                {/* Product Titans Achievement Card */}
                <div className="bg-white rounded-2xl shadow-elevation-2 p-8 mb-8 hover:shadow-elevation-3 transition-shadow relative">

                    <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">

                        {/* Left: Achievement Details */}
                        <div>
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container text-sm font-medium rounded-pill border border-outline-variant">
                                    🏆 FEATURED ACHIEVEMENT
                                </span>
                                <span className="px-3 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-pill text-sm font-medium border border-outline-variant">
                                    Runner-up • Rank 2
                                </span>
                            </div>

                            <h3 className="text-display-lg text-on-surface mb-3 font-medium">
                                Product Titans
                            </h3>

                            <p className="text-base text-text-primary leading-relaxed mb-6 font-medium">
                                Independent PM case study created for a national-level live project challenge hosted on
                                <strong> Unstop</strong> and organized by <strong>Book My Mentor</strong>. Built an India-first
                                agentic AI learning platform concept with problem framing, personas, journey mapping, RICE
                                prioritization, North Star metrics, experimentation plan, and responsible AI governance
                                (trust, explainability, privacy).
                            </p>

                            {/* Metrics - Clean cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-primary-container/40 rounded-xl p-3">
                                    <div className="text-2xl font-medium text-on-surface">Rank 2</div>
                                    <div className="text-xs text-on-surface-variant font-medium">National Rank</div>
                                </div>
                                <div className="bg-secondary-container/40 rounded-xl p-3">
                                    <div className="text-2xl font-medium text-on-surface">6.4</div>
                                    <div className="text-xs text-on-surface-variant font-medium">Score</div>
                                </div>
                                <div className="bg-tertiary-container/40 rounded-xl p-3">
                                    <div className="text-lg font-medium text-on-surface">Solo</div>
                                    <div className="text-xs text-on-surface-variant font-medium">Team Type</div>
                                </div>
                                <div className="bg-surface-container-high rounded-xl p-3">
                                    <div className="text-sm font-medium text-on-surface">North Star Hunter</div>
                                    <div className="text-xs text-on-surface-variant font-medium">Team Name</div>
                                </div>
                            </div>

                            {/* Deliverables - Vibrant tags replaced with M3 tokens */}
                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-on-surface mb-3">Product Skills Applied</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['User Research', 'RICE Prioritization', 'North Star Mapping', 'GTM Strategy', 'Responsible AI'].map((deliverable, idx) => (
                                        <span
                                            key={deliverable}
                                            className={`
                                                px-3 py-1.5 text-on-surface-variant text-sm rounded-pill font-medium border border-outline-variant
                                                ${idx % 4 === 0 ? 'bg-primary-container/50' : ''}
                                                ${idx % 4 === 1 ? 'bg-secondary-container/50' : ''}
                                                ${idx % 4 === 2 ? 'bg-tertiary-container/50' : ''}
                                                ${idx % 4 === 3 ? 'bg-surface-container-high' : ''}
                                            `}
                                        >
                                            {deliverable}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs - Vibrant button */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://youtu.be/M_D3dxxZiqI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-pill font-medium transition-all duration-200 bg-primary text-on-primary px-8 py-4 text-base hover:shadow-elevation-2"
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
                                className="w-full rounded-2xl shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer"
                                onClick={() => window.open(certificateImage, '_blank')}
                            />
                            <p className="text-xs text-text-secondary text-center mt-2 font-semibold">
                                Click to view full certificate
                            </p>
                        </div>

                    </div>
                </div>

                {/* Featured Certifications - Grid */}
                <div className="mt-12">
                    <h3 className="text-display-md text-primary mb-6 font-medium">Professional Certifications</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-primary-container rounded-2xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow flex flex-col justify-center min-h-[140px]">
                            <h4 className="font-medium text-on-primary-container text-base mb-2 leading-tight">IBM – AI Product Manager Professional Certificate</h4>
                            <p className="text-sm text-on-primary-container/80 font-medium">IBM Professional Certificate</p>
                        </div>
                        <div className="bg-secondary-container rounded-2xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow flex flex-col justify-center min-h-[140px]">
                            <h4 className="font-medium text-on-secondary-container text-base mb-2 leading-tight">Google – AI Professional Certificate & Project Management</h4>
                            <p className="text-sm text-on-secondary-container/80 font-medium">Google Career Certificates</p>
                        </div>
                        <div className="bg-tertiary-container rounded-2xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow flex flex-col justify-center min-h-[140px]">
                            <h4 className="font-medium text-on-tertiary-container text-base mb-2 leading-tight">Meta – Principles of UX/UI Design</h4>
                            <p className="text-sm text-on-tertiary-container/80 font-medium">Meta Professional Certificate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}