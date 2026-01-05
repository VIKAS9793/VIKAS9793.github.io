import type { ContactSectionProps } from '@types';
import PillButton from './ui/PillButton';

// SVG icons for contact types (no emojis)
const getContactIcon = (type: string) => {
  switch (type) {
    case 'email':
      return (
        <svg className="w-5 h-5 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'phone':
      return (
        <svg className="w-5 h-5 text-google-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5 text-google-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-5 h-5 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
  }
};

/**
 * Contact section - clean Google style
 * All contact links preserved from portfolio.ts
 */
export default function ContactSection({ contactInfo, personalInfo }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="section-white"
      aria-labelledby="contact-heading"
    >
      <div className="container-google">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D card stack illustration style */}
          <div className="relative">
            <div className="space-y-4">
              {/* Stacked cards effect */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-google-green/20 rounded-card-lg rotate-3" />
              <div className="absolute -top-2 -left-2 w-full h-full bg-google-blue/20 rounded-card-lg rotate-1" />
              <div className="relative bg-white border-2 border-ui-border rounded-card-lg p-8 shadow-card">
                {/* Google Developer badge style */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-google-blue flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">{personalInfo.name}</div>
                    <div className="text-sm text-text-secondary">{personalInfo.title}</div>
                  </div>
                </div>

                {/* Contact info cards */}
                <div className="space-y-3">
                  {contactInfo.slice(0, 4).map((contact) => (
                    <a
                      key={contact.type}
                      href={contact.url}
                      target={contact.url.startsWith('http') ? '_blank' : undefined}
                      rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-section-lightgray transition-colors"
                    >
                      {getContactIcon(contact.type)}
                      <div>
                        <div className="font-medium text-text-primary">{contact.label}</div>
                        <div className="text-sm text-text-secondary">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text and CTA */}
          <div className="space-y-6">
            <h2 id="contact-heading" className="title-section">
              Share your interests.{' '}
              <br />
              <span className="text-gradient-blue">Get in touch.</span>
            </h2>
            <p className="body-large">
              Open to opportunities in AI Product Management and strategic consulting.
              Let's build something extraordinary together.
            </p>

            {/* All contact links */}
            <div className="flex flex-wrap gap-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.type}
                  href={contact.url}
                  target={contact.url.startsWith('http') ? '_blank' : undefined}
                  rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-pill border border-ui-border hover:border-google-blue hover:text-google-blue transition-colors"
                >
                  {getContactIcon(contact.type)}
                  <span className="text-sm font-medium">{contact.label}</span>
                </a>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex gap-4 pt-4">
              <PillButton variant="primary" href={`mailto:${personalInfo.email}`}>
                Send Email
              </PillButton>
              <PillButton variant="outline" href="https://www.linkedin.com/in/vikas-sahani-727420358" external>
                Connect on LinkedIn
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
