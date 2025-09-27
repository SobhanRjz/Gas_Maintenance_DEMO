type Props = {
  w?: number;
  h?: number;
  data: { value: number; color: string; label: string }[];
};

export default function MiniDonut({ w = 200, h = 200, data }: Props) {
  const centerX = w / 2;
  const centerY = h / 2;
  const radius = Math.min(centerX, centerY) - 20;
  const innerRadius = radius * 0.6;

  let currentAngle = -Math.PI / 2; // Start from top

  const paths = data.map((item, index) => {
    const angle = (item.value / 100) * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;

    const x1 = centerX + Math.cos(startAngle) * radius;
    const y1 = centerY + Math.sin(startAngle) * radius;
    const x2 = centerX + Math.cos(endAngle) * radius;
    const y2 = centerY + Math.sin(endAngle) * radius;

    const largeArcFlag = angle > Math.PI ? 1 : 0;

    const pathData = [
      `M ${centerX + Math.cos(startAngle) * innerRadius} ${centerY + Math.sin(startAngle) * innerRadius}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      `L ${centerX + Math.cos(endAngle) * innerRadius} ${centerY + Math.sin(endAngle) * innerRadius}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${centerX + Math.cos(startAngle) * innerRadius} ${centerY + Math.sin(startAngle) * innerRadius}`,
      'Z'
    ].join(' ');

    currentAngle = endAngle;

    return (
      <path
        key={index}
        d={pathData}
        fill={item.color}
        opacity={0.8}
      />
    );
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h}>
      <g>
        {paths}
      </g>
      {/* Center circle for donut effect */}
      <circle
        cx={centerX}
        cy={centerY}
        r={innerRadius}
        fill="var(--panel)"
      />
      {/* Center text */}
      <text
        x={centerX}
        y={centerY - 8}
        textAnchor="middle"
        fill="var(--text)"
        fontSize="16"
        fontWeight="700"
      >
        87%
      </text>
      <text
        x={centerX}
        y={centerY + 8}
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="12"
      >
        Healthy
      </text>
    </svg>
  );
}
