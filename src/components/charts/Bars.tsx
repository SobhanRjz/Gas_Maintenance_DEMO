export default function Bars({vals}:{vals:number[]}) {
  const w=640, h=260, p=24, pb=40, pl=40; // Increased height and padding for axes
  const iw=w-pl-p, ih=h-p-pb;
  const max=100; // Fixed max at 100% for percentage scale
  const bw=iw/vals.length*.7, gap=(iw/vals.length)-bw;
  
  // Month labels (last 12 months)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  const monthLabels = Array.from({length: 12}, (_, i) => {
    const monthIndex = (currentMonth - 11 + i + 12) % 12;
    return months[monthIndex];
  });
  
  // Y-axis ticks (percentage values)
  const yTicks = [0, 20, 40, 60, 80, 100];
  
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h}>
      {/* Grid lines */}
      {yTicks.map((tick) => {
        const y = h - pb - (tick / max) * ih;
        return (
          <line 
            key={tick} 
            x1={pl} 
            y1={y} 
            x2={w-p} 
            y2={y} 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="1"
          />
        );
      })}
      
      {/* Bars */}
      {vals.map((v,i)=>{
        const x=pl+i*(bw+gap), bh=((v/max)||0)*ih, y=h-pb-bh;
        return <g key={i}>
          <rect x={x} y={y} width={bw} height={bh} fill="#232b36" />
          <rect x={x} y={y} width={bw} height={Math.max(4,bh*0.05)} fill="var(--accent)" />
          <rect x={x} y={y} width={bw} height={bh} fill="url(#barGrad)" opacity=".15"/>
          
          {/* Value labels on bars */}
          <text 
            x={x + bw/2} 
            y={y - 6} 
            textAnchor="middle" 
            fill="#94a3b8" 
            fontSize="11" 
            fontWeight="500"
          >
            {v}%
          </text>
        </g>
      })}
      
      {/* X-axis labels (months) */}
      {monthLabels.map((month, i) => {
        const x = pl + i * (bw + gap) + bw/2;
        return (
          <text 
            key={i}
            x={x} 
            y={h - pb + 20} 
            textAnchor="middle" 
            fill="#64748b" 
            fontSize="12" 
            fontWeight="500"
          >
            {month}
          </text>
        );
      })}
      
      {/* Y-axis labels (percentages) */}
      {yTicks.map((tick) => {
        const y = h - pb - (tick / max) * ih;
        return (
          <text 
            key={tick}
            x={pl - 8} 
            y={y + 4} 
            textAnchor="end" 
            fill="#64748b" 
            fontSize="11" 
            fontWeight="500"
          >
            {tick}%
          </text>
        );
      })}
      
      {/* Target line at 95% */}
      <line 
        x1={pl} 
        y1={h - pb - (95 / max) * ih} 
        x2={w-p} 
        y2={h - pb - (95 / max) * ih} 
        stroke="#22c55e" 
        strokeWidth="2" 
        strokeDasharray="4,4"
        opacity="0.8"
      />
      
      {/* Benchmark line at 92% */}
      <line 
        x1={pl} 
        y1={h - pb - (92 / max) * ih} 
        x2={w-p} 
        y2={h - pb - (92 / max) * ih} 
        stroke="#f59e0b" 
        strokeWidth="2" 
        strokeDasharray="2,2"
        opacity="0.6"
      />
      
      <defs>
        <linearGradient id="barGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity=".5"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
