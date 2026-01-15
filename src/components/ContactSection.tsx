import type { ContactSectionProps } from '@types';
import SpeechBubble from '@components/ui/SpeechBubble';
import { StarIcon } from '@components/ui/SocialIcons';

// Contact icons with vibrant styling
const getContactIcon = (type: string) => {
  switch (type) {
    case 'email':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Contact Section - Vibrant Design
 */
export default function ContactSection({ contactInfo, personalInfo }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="bg-vibrant-green/20 py-section relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-google">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info Card */}
          <div className="bg-white border-punchy-lg border-black rounded-card p-8 hover:shadow-xl transition-all relative">
            {/* Decorative star */}
            <div className="absolute -top-3 -right-3 z-10">
              <StarIcon color="#FF69B4" size={35} />
            </div>

            <div className="mb-6">
              <SpeechBubble color="green" size="md" tailDirection="none">
                <span className="text-punchy-md">Get in Touch</span>
              </SpeechBubble>
            </div>

            {/* Contact Methods - Vibrant cards */}
            <div className="space-y-4">
              {contactInfo.slice(0, 3).map((contact, idx) => (
                <a
                  key={contact.type}
                  href={contact.url}
                  target={contact.url.startsWith('http') ? '_blank' : undefined}
                  rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`
                    flex items-center gap-4 p-4 rounded-lg transition-all border-punchy-md hover:scale-105
                    ${idx === 0 ? 'bg-vibrant-cyan/20 border-vibrant-cyan' : ''}
                    ${idx === 1 ? 'bg-vibrant-pink/20 border-vibrant-pink' : ''}
                    ${idx === 2 ? 'bg-vibrant-yellow/20 border-vibrant-yellow' : ''}
                  `}
                >
                  <div className="text-black">
                    {getContactIcon(contact.type)}
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">{contact.label}</div>
                    <div className="text-sm text-text-secondary font-semibold">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex flex-col justify-center">
            <h3 className="text-display-lg text-text-primary mb-4 font-black">
              Let's Build Something Great
            </h3>
            <p className="text-lg text-text-primary mb-8 font-medium leading-relaxed">
              Open to opportunities in AI Product Management and strategic consulting.
              Let's build something extraordinary together.
            </p>

            {/* CTAs - Vibrant buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 bg-vibrant-cyan text-black border-punchy-lg border-black px-8 py-4 text-lg hover:scale-105 hover:bg-vibrant-pink text-center"
              >
                Send Email →
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-sahani-727420358"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-pill font-bold transition-all duration-200 border-punchy-md border-black px-6 py-3 text-text-primary bg-white hover:bg-vibrant-yellow"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
