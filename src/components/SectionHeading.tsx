interface Props {
  id: string;
  label: string;
  title: string;
  lead?: string;
}

export default function SectionHeading({ id, label, title, lead }: Props) {
  return (
    <div className="section-heading reveal">
      <p className="label">{label}</p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}
