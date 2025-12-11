import type { CertificationsSectionProps } from '@types';

/**
 * Certifications section with HOVER CARDS + DevFest decorations
 */
export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  // Google colors for variety
  const googleColors = ['bg-google-blue', 'bg-google-green', 'bg-google-yellow', 'bg-google-red'];

  return (
    <section
      id="certifications"
      className="section-blue relative overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      {/* DevFest Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-google-green/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-google-yellow/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-google relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="certifications-heading" className="title-section mb-4">
            Professional Certifications
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Credentials from IBM, Google, DeepLearning.AI and more
          </p>
          <a
            href="https://www.credly.com/users/vikas-sahani.e0a347d7/badges#credly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 bg-google-blue text-white rounded-full font-medium hover:bg-google-blue/90 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            View All Badges
          </a>
        </div>

        {/* Hover Cards Grid with alternating colors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="hover-card text-center group"
            >
              {/* Circular icon with rotating Google colors */}
              <div className={`hover-icon w-14 h-14 rounded-full ${googleColors[index % 4]} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-1 text-xs leading-tight group-hover:text-google-blue transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-text-secondary">{cert.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
