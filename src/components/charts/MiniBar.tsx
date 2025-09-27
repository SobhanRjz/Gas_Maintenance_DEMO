type Props = {
  w?: number;
  h?: number;
  data: number[];
  accent?: string;
  labels?: string[];
};

export default function MiniBar({ w = 400, h = 200, data, accent = "var(--accent)", labels }: Props) {
  const max = Math.max(...data, 1);
  const pad = 40;
  const chartWidth = w - pad * 2;
  const chartHeight = h - pad * 2;
  const barWidth = chartWidth / data.length - 8; // 8px gap between bars

  const bars = data.map((value, index) => {
    const barHeight = (value / max) * chartHeight;
    const x = pad + (chartWidth / data.length) * index + 4; // 4px padding on each side of bar
    const y = pad + chartHeight - barHeight;

    return (
      <rect
        key={index}
        x={x}
        y={y}
        width={barWidth}
        height={barHeight}
        fill={accent}
        opacity={0.8}
        rx={2}
      />
    );
  });

  const labelElements = labels?.map((label, index) => {
    const x = pad + (chartWidth / data.length) * index + (chartWidth / data.length) / 2;
    const y = h - 10;

    return (
      <text
        key={`label-${index}`}
        x={x}
        y={y}
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="10"
      >
        {label}
      </text>
    );
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h}>
      {/* Background */}
      <rect x="0" y="0" width={w} height={h} fill="transparent" />

      {/* Grid lines (optional) */}
      {[0.25, 0.5, 0.75].map(ratio => (
        <line
          key={ratio}
          x1={pad}
          y1={pad + chartHeight * (1 - ratio)}
          x2={w - pad}
          y2={pad + chartHeight * (1 - ratio)}
          stroke="var(--border)"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}

      {/* Bars */}
      {bars}

      {/* Labels */}
      {labelElements}
    </svg>
  );
}
