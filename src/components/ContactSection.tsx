import type { ContactSectionProps } from '@types';
import SafeLink from './SafeLink';
import SectionHeader from '@components/ui/SectionHeader';
import Card from '@components/ui/Card';
import ContactForm from './ContactForm';

export default function ContactSection({ contactInfo, title = "Let's Collaborate", subtitle = 'Open to opportunities in AI Product Management and strategic consulting' }: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Image - Connection */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3274&auto=format&fit=crop" 
          alt="Connection Background"
          className="w-full h-full object-cover opacity-8"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      </div>
      <SectionHeader eyebrow="[ Connect ]" title={title} subtitle={subtitle} accent="primary" />

      <div className="container-center">
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <ContactForm />
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((c) => (
            <Card key={c.type} className="text-center">
              <SafeLink href={c.url} className="no-underline text-white dark:text-white">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="font-semibold">{c.label}</div>
                <div className="text-sm text-gray-400 mt-1">{c.value}</div>
              </SafeLink>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
