import React from 'react';

interface CaseStudyVideoCardProps {
    title: string;
    description: string;
    videoUrl: string;
    label?: string;
}

/**
 * Case Study Video Card - Google Developer Program Style
 * Features:
 * - Dark theme (#202124) with halo glow effect
 * - Horizontal split layout (Text Left, Video Right)
 * - Gradient text label
 * - 28px rounded container
 */
export const CaseStudyVideoCard: React.FC<CaseStudyVideoCardProps> = ({
    title,
    description,
    videoUrl,
    label = 'Case Study',
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
