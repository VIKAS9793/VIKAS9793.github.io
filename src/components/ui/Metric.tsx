interface MetricProps {
  label: string;
  value: string;
}

export default function Metric({ label, value }: MetricProps) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
      <div className="text-lg font-mono text-primary-500">{value}</div>
    </div>
  );
}
