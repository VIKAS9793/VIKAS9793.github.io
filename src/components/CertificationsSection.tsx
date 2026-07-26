import { useState } from 'react';
import type { CertificationsSectionProps, Certification } from '@types';

// Priority order for certifications (top ones always visible)
// Note: only lists ids that exist in the data. If you add PMI GenAI, Vanderbilt GenAI,
// or CrewAI Agents certifications later, add their real ids here.
const PRIORITY_CERT_IDS = [
  'ibm-ai-pm',
  'google-ai-professional',
  'google-pm',
  'nism-va',
  'irdai-composite'
];

// Category tags for certifications
function getCertCategory(title: string): { tag: string; color: string } {
  const lower = title.toLowerCase();
  if (lower.includes('nism') || lower.includes('irdai') || lower.includes('mutual fund') || lower.includes('insurance')) {
    return { tag: '📊 Regulatory/BFSI', color: 'bg-primary-container text-primary' };
  }
  if (lower.includes('mba') || lower.includes('project management')) {
    return { tag: '🎓 Academic', color: 'bg-primary-container text-primary' };
  }
  if (lower.includes('pm') || lower.includes('product') || lower.includes('ux')) {
    return { tag: '💼 Product', color: 'bg-primary-container text-primary' };
  }
  return { tag: '🤖 AI/ML', color: 'bg-primary-container text-primary' };
}

/**
 * Certification Card with category tag
 */
function CertCard({ cert }: { cert: Certification }) {
  const { tag, color } = getCertCategory(cert.title);
  const skills = cert.skills ?? [];
  const visibleSkills = skills.slice(0, 3);
  const remaining = skills.length - visibleSkills.length;

  return (
    <div className="hover-card text-center group">
      {/* Category Tag */}
      <span className={`inline-block px-2 py-0.5 rounded-full text-xs mb-2 ${color}`}>
        {tag}
      </span>

      {/* Circular icon */}
      {/* Icons removed as requested */}

      <h3 className="font-semibold text-on-surface mb-1 text-xs leading-tight group-hover:text-primary transition-colors">
        {cert.title}
      </h3>
      <p className="text-xs text-on-surface-variant">{cert.organization}</p>
      {cert.description && (
        <p className="text-[10px] text-on-surface-variant mt-1">{cert.description}</p>
      )}

      {skills.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {visibleSkills.map((skill) => (
            <span
              key={skill}
              className="px-1.5 py-0.5 rounded-full text-[9px] leading-tight bg-surface-variant text-on-surface-variant"
            >
              {skill}
            </span>
          ))}
          {remaining > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[9px] leading-tight bg-surface-variant text-on-surface-variant">
              +{remaining} more
            </span>
          )}
        </div>
      )}
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
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-google relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 id="certifications-heading" className="title-section mb-4">
            Certifications
          </h2>
          <p className="body-large max-w-2xl mx-auto mb-4">
            Credentials from IBM, Google, NISM, and IRDAI
          </p>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <span className="px-3 py-1 bg-primary-container text-primary rounded-full">🎓 Academic</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded-full">🤖 AI/ML</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded-full">💼 Product</span>
            <span className="px-3 py-1 bg-primary-container text-primary rounded-full">📊 Regulatory/BFSI</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {visibleCerts.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
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