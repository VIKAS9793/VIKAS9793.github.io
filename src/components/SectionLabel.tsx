interface Props {
  number: string;
  children: string;
  tone?: 'light' | 'dark';
  center?: boolean;
}

/** Section number, a short rule and the category: "01 ---- Work". */
export default function SectionLabel({ number, children, tone = 'light', center = false }: Props) {
  const className = ['section-label', tone === 'dark' ? 'section-label--dark' : '', center ? 'section-label--center' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <p className={className}>
      <span>{number}</span>
      <span className="section-label__text">{children}</span>
    </p>
  );
}
