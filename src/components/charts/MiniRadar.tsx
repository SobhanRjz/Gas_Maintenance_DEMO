type Props = {
  w?: number;
  h?: number;
  data: number[];
  labels?: string[];
  accent?: string;
};

export default function MiniRadar({ w = 200, h = 200, data, labels = [], accent = "var(--accent)" }: Props) {
  const centerX = w / 2;
  const centerY = h / 2;
  const radius = Math.min(centerX, centerY) - 20;
  const maxValue = Math.max(...data, 1);

  // Calculate points for the radar shape
  const points = data.map((value, index) => {
    const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2; // Start from top
    const distance = (value / maxValue) * radius;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;
    return { x, y };
  });

  // Create path for radar shape
  const radarPath = points.map((point, index) =>
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ') + ' Z';

  // Create grid circles
  const gridCircles = [0.25, 0.5, 0.75, 1].map(ratio => (
    <circle
      key={ratio}
      cx={centerX}
      cy={centerY}
      r={radius * ratio}
      fill="none"
      stroke="var(--border)"
      strokeWidth="1"
      opacity="0.3"
    />
  ));

  // Create grid lines
  const gridLines = data.map((_, index) => {
    const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    return (
      <line
        key={index}
        x1={centerX}
        y1={centerY}
        x2={x}
        y2={y}
        stroke="var(--border)"
        strokeWidth="1"
        opacity="0.3"
      />
    );
  });

  // Create labels
  const labelElements = labels.map((label, index) => {
    const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + Math.cos(angle) * (radius + 15);
    const y = centerY + Math.sin(angle) * (radius + 15);

    return (
      <text
        key={`label-${index}`}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
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

      {/* Grid circles */}
      {gridCircles}

      {/* Grid lines */}
      {gridLines}

      {/* Radar shape fill */}
      <path
        d={radarPath}
        fill={accent}
        fillOpacity="0.1"
        stroke={accent}
        strokeWidth="2"
      />

      {/* Radar shape outline */}
      <path
        d={radarPath}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity="0.8"
      />

      {/* Data points */}
      {points.map((point, index) => (
        <circle
          key={`point-${index}`}
          cx={point.x}
          cy={point.y}
          r="3"
          fill={accent}
        />
      ))}

      {/* Labels */}
      {labelElements}
    </svg>
  );
}
