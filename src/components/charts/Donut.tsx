export default function Donut({value,label}:{value:number;label:string}){
  const size=180, stroke=14, r=(size-stroke)/2, c=2*Math.PI*r;
  const pct=Math.max(0,Math.min(100,value));
  const off=c*(1-pct/100);
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
      <g transform={`translate(${size/2} ${size/2})`}>
        <circle r={r} fill="none" stroke="rgba(255,255,255,.06)" strokeWidth={stroke}/>
        <circle r={r} fill="none" stroke="var(--accent)" strokeWidth={stroke}
          strokeDasharray={`${c} ${c}`} strokeDashoffset={off} transform="rotate(-90)"/>
        <text textAnchor="middle" dominantBaseline="middle" fill="var(--text)" fontSize="28" fontWeight="800">{pct}%</text>
        <text y="26" textAnchor="middle" fill="var(--muted)" fontSize="12">{label}</text>
      </g>
    </svg>
  );
}
