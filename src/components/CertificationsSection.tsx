import type { CertificationsSectionProps } from '@types';
import SectionHeader from '@components/ui/SectionHeader';
import Card from '@components/ui/Card';

export default function CertificationsSection({ certifications, title = 'Certifications', subtitle = 'Professional credentials in AI, product and strategy' }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="section-padding relative" aria-labelledby="certifications-heading">
      {/* Background Image - Achievement */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3270&auto=format&fit=crop" 
          alt="Achievement Background"
          className="w-full h-full object-cover opacity-8"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
      </div>
      <SectionHeader eyebrow="[ Credentials ]" title={title} subtitle={subtitle} accent="secondary" id="certifications-heading" />

      <div className="container-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c) => (
          <Card key={c.id} className="text-center">
            <div className="text-3xl mb-3">{c.icon ?? '🎖️'}</div>
            <div className="font-semibold">{c.title}</div>
            <div className="text-sm text-gray-400 mt-1">{c.organization}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
