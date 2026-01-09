import React from 'react';

interface RoleScopeContent {
    title: string;
    role: string;
    scope: string;
    tools: string;
    note?: string;
}

interface CaseStudyVideoCardProps {
    title: string;
    description: string;
    videoUrl: string;
    figmaUrl?: string;
    label?: string;
    roleScope?: RoleScopeContent;
}

/**
 * Case Study Video Card - Google Developer Program Style
 * Features:
 * - Dark theme (#202124) with halo glow effect
 * - Horizontal split layout (Text Left, Video Right)
 * - Gradient text label
 * - 28px rounded container
 * - Optional Role/Scope context box
 * - Figma/GitHub prototype link
 */
export const CaseStudyVideoCard: React.FC<CaseStudyVideoCardProps> = ({
    title,
    description,
    videoUrl,
    figmaUrl,
    label = 'Case Study',
    roleScope,
}) => {
    // Extract YouTube video ID from URL
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeId(videoUrl);

    return (
        <div className="glow-halo">
            <div className="bg-section-dark rounded-[28px] p-8 md:p-12 lg:p-16">
                <div className="container-google">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Content - Left Side */}
                        <div className="space-y-6">
                            {/* Label with Gradient */}
                            <p className="text-gradient-blue text-sm font-medium uppercase tracking-wider">
                                {label}
                            </p>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-text-inverse font-medium leading-tight">
                                {title}
                            </h2>

                            {/* Description */}
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {description}
                            </p>

                            {/* Role & Scope Box - Optional */}
                            {roleScope && (
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                                    <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                                        {roleScope.title}
                                    </h3>

                                    <div className="space-y-2 text-sm text-gray-300">
                                        <div className="flex gap-2">
                                            <span className="text-google-blue font-medium">Role:</span>
                                            <span>{roleScope.role}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-google-blue font-medium">Scope:</span>
                                            <span>{roleScope.scope}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-google-blue font-medium">Tools:</span>
                                            <span>{roleScope.tools}</span>
                                        </div>
                                    </div>

                                    {roleScope.note && (
                                        <p className="text-xs text-gray-400 italic pt-2 border-t border-white/10">
                                            {roleScope.note}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Figma Link */}
                            {figmaUrl && (
                                <a
                                    href={figmaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-pill border border-white/20 hover:border-white/30 transition-all font-medium"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0a4.489 4.489 0 0 1-.002-8.98 4.489 4.489 0 0 1 .002 8.98zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019z" />
                                    </svg>
                                    View Figma Prototype
                                </a>
                            )}
                        </div>

                        {/* Video - Right Side */}
                        <div className="relative">
                            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                                {videoId ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-500">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
