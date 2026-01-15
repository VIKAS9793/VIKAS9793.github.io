import { StarIcon, ThumbsUpIcon } from '@components/ui/SocialIcons';

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
            className="bg-vibrant-cyan/10 py-section relative"
            aria-labelledby="achievements-heading"
        >
            <div className="container-google max-w-5xl">
                {/* Header with decorative elements */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 id="achievements-heading" className="text-display-xl text-text-primary font-black">
                            Achievements & Certifications
                        </h2>
                        <div className="hidden md:block">
                            <ThumbsUpIcon color="#FFD700" size={45} />
                        </div>
                    </div>
                    <p className="text-lg text-text-secondary max-w-2xl font-semibold">
                        Recognition for product management excellence and professional certifications
                    </p>
                </div>

                {/* Product Titans Achievement Card - Vibrant Featured */}
                <div className="bg-white border-punchy-lg border-black rounded-card p-8 mb-8 hover:shadow-2xl transition-all relative">
                    {/* Decorative star */}
                    <div className="absolute -top-4 -right-4 z-10">
                        <StarIcon color="#FFD700" size={50} />
                    </div>

                    <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">

                        {/* Left: Achievement Details */}
                        <div>
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                                <span className="px-4 py-2 bg-vibrant-orange text-black text-sm font-black rounded-pill border-punchy-md border-black">
                                    🏆 FEATURED ACHIEVEMENT
                                </span>
                                <span className="px-3 py-1.5 bg-vibrant-yellow text-black border-punchy-sm border-black rounded-pill text-sm font-bold">
                                    Runner-up • Rank 2
                                </span>
                            </div>

                            <h3 className="text-display-lg text-text-primary mb-3 font-black">
                                Product Titans – National Product Management Challenge
                            </h3>

                            <p className="text-base text-text-primary leading-relaxed mb-6 font-medium">
                                Independent PM case study created for a national-level live project challenge hosted on
                                <strong> Unstop</strong> and organized by <strong>Book My Mentor</strong>. Built an India-first
                                agentic AI learning platform concept with problem framing, personas, journey mapping, RICE
                                prioritization, North Star metrics, experimentation plan, and responsible AI governance
                                (trust, explainability, privacy).
                            </p>

                            {/* Metrics - Vibrant cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-vibrant-cyan/20 border-punchy-md border-vibrant-cyan rounded-card p-3">
                                    <div className="text-2xl font-black text-black">Rank 2</div>
                                    <div className="text-xs text-text-secondary font-bold">National Rank</div>
                                </div>
                                <div className="bg-vibrant-green/20 border-punchy-md border-vibrant-green rounded-card p-3">
                                    <div className="text-2xl font-black text-black">6.4</div>
                                    <div className="text-xs text-text-secondary font-bold">Score</div>
                                </div>
                                <div className="bg-vibrant-yellow/20 border-punchy-md border-vibrant-yellow rounded-card p-3">
                                    <div className="text-lg font-black text-black">Solo</div>
                                    <div className="text-xs text-text-secondary font-bold">Team Type</div>
                                </div>
                                <div className="bg-vibrant-pink/20 border-punchy-md border-vibrant-pink rounded-card p-3">
                                    <div className="text-sm font-black text-black">North Star Hunter</div>
                                    <div className="text-xs text-text-secondary font-bold">Team Name</div>
                                </div>
                            </div>

                            {/* Deliverables - Vibrant tags */}
                            <div className="mb-6">
                                <h4 className="text-lg font-black text-text-primary mb-3">Deliverables</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Personas', 'Journey Mapping', 'RICE Prioritization', 'North Star Metrics', 'GTM Strategy', 'Experimentation Plan', 'Responsible AI Governance'].map((deliverable, idx) => (
                                        <span
                                            key={deliverable}
                                            className={`
                                                px-3 py-1.5 text-black text-sm rounded-pill font-bold border-2
                                                ${idx % 4 === 0 ? 'bg-vibrant-cyan/20 border-vibrant-cyan' : ''}
                                                ${idx % 4 === 1 ? 'bg-vibrant-pink/20 border-vibrant-pink' : ''}
                                                ${idx % 4 === 2 ? 'bg-vibrant-yellow/20 border-vibrant-yellow' : ''}
                                                ${idx % 4 === 3 ? 'bg-vibrant-green/20 border-vibrant-green' : ''}
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
                                    className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 bg-vibrant-pink text-black border-punchy-lg border-black px-8 py-4 text-base hover:scale-105 hover:bg-vibrant-orange"
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
                                className="w-full border-punchy-lg border-black rounded-card shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => window.open(certificateImage, '_blank')}
                            />
                            <p className="text-xs text-text-secondary text-center mt-2 font-semibold">
                                Click to view full certificate
                            </p>
                        </div>

                    </div>
                </div>

                {/* Other Certifications - Vibrant Grid */}
                <div className="mt-12">
                    <h3 className="text-display-md text-text-primary mb-6 font-black">Professional Certifications</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-vibrant-cyan border-punchy-md border-black rounded-card p-6 hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">🏆</div>
                            <h4 className="font-black text-text-primary text-base mb-2">IBM AI Product Manager</h4>
                            <p className="text-sm text-text-secondary font-semibold">IBM Professional Certificate</p>
                        </div>
                        <div className="bg-vibrant-green border-punchy-md border-black rounded-card p-6 hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">🎯</div>
                            <h4 className="font-black text-text-primary text-base mb-2">Google Project Management</h4>
                            <p className="text-sm text-text-secondary font-semibold">Google Certificate</p>
                        </div>
                        <div className="bg-vibrant-yellow border-punchy-md border-black rounded-card p-6 hover:scale-105 transition-transform">
                            <div className="text-3xl mb-3">🤖</div>
                            <h4 className="font-black text-text-primary text-base mb-2">AI Agents & LLMs</h4>
                            <p className="text-sm text-text-secondary font-semibold">DeepLearning.AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
