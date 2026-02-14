import { useState } from 'react';
import type { CertificationsSectionProps, Certification } from '@types';

// Priority order for certifications (top 6 always visible)
const PRIORITY_CERT_IDS = [
  'ai-pm-ibm',
  'genai-pm-pmi',
  'mba-essentials',
  'genai-sw-vanderbilt',
  'llm-pretraining',
  'ai-agents-crewai'
];

// Category tags for certifications
function getCertCategory(title: string): { tag: string; color: string } {
  const lower = title.toLowerCase();
  if (lower.includes('mba') || lower.includes('project management')) {
    return { tag: '🎓 Academic', color: 'bg-vibrant-blue/10 text-vibrant-blue' };
  }
  if (lower.includes('pm') || lower.includes('product') || lower.includes('ux')) {
    return { tag: '💼 Product', color: 'bg-vibrant-green/10 text-vibrant-green' };
  }
  return { tag: '🤖 AI/ML', color: 'bg-vibrant-yellow/10 text-vibrant-yellow' };
}

/**
 * Certification Card with category tag
 */
function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const vibrantColors = ['bg-vibrant-blue', 'bg-vibrant-green', 'bg-vibrant-yellow', 'bg-vibrant-red'];
  const { tag, color } = getCertCategory(cert.title);

  return (
    <div className="hover-card text-center group">
      {/* Category Tag */}
      <span className={`inline-block px-2 py-0.5 rounded-full text-xs mb-2 ${color}`}>
        {tag}
      </span>

      {/* Circular icon */}
      <div className={`hover-icon w-12 h-12 rounded-full ${vibrantColors[index % 4]} flex items-center justify-center mx-auto mb-3 shadow-elevation-1`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>

      <h3 className="font-semibold text-on-surface mb-1 text-xs leading-tight group-hover:text-primary transition-colors">
        {cert.title}
      </h3>
      <p className="text-xs text-on-surface-variant">{cert.organization}</p>
    </div>
  );
}

/**
 * Certifications with top 6 visible, rest expandable
 */
export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  // Sort: priority certs first, then rest
  const sortedCerts = [...certifications].sort((a, b) => {
    const aIdx = PRIORITY_CERT_IDS.indexOf(a.id);
    const bIdx = PRIORITY_CERT_IDS.indexOf(b.id);
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  const visibleCerts = showAll ? sortedCerts : sortedCerts.slice(0, 6);
  const hiddenCount = sortedCerts.length - 6;

  return (
    <section
      id="certifications"
      className="bg-surface-container relative overflow-hidden py-16"
      aria-labelledby="certifications-heading"
    >
      {/* DevFest Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-vibrant-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-google relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 id="certifications-heading" className="title-section mb-4">
            Professional Certifications
          </h2>
          <p className="body-large max-w-2xl mx-auto mb-4">
            Credentials from IBM, Google, DeepLearning.AI and more
          </p>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <span className="px-3 py-1 bg-vibrant-blue/10 text-vibrant-blue rounded-full">🎓 Academic</span>
            <span className="px-3 py-1 bg-vibrant-yellow/10 text-vibrant-yellow rounded-full">🤖 AI/ML</span>
            <span className="px-3 py-1 bg-vibrant-green/10 text-vibrant-green rounded-full">💼 Product</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {visibleCerts.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* View All Button */}
        {hiddenCount > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-surface rounded-full text-on-surface font-medium shadow-elevation-1 hover:shadow-elevation-2 transition-all inline-flex items-center gap-2"
            >
              {showAll ? 'Show Less' : `View All ${sortedCerts.length} Certifications`}
              <svg
                className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Credly Link */}
        <div className="text-center mt-6">
          <a
            href="https://www.credly.com/users/vikas-sahani.e0a347d7/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Verify on Credly
          </a>
        </div>
      </div>
    </section>
  );
}
