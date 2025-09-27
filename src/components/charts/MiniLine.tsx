type Props={w?:number;h?:number;points:number[];accent?:string};
export default function MiniLine({w=640,h=220,points,accent="var(--accent)"}:Props){
  const max=Math.max(...points,1), min=Math.min(...points,0);
  const pad=24, iw=w-pad*2, ih=h-pad*2;
  const d=points.map((v,i)=>{
    const x=pad + (i/(points.length-1))*iw;
    const y=pad + ih - ((v-min)/(max-min||1))*ih;
    return `${i?"L":"M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h}>
      <rect x="0" y="0" width={w} height={h} fill="transparent" />
      <path d={d} fill="none" stroke={accent} strokeWidth="2.5" opacity=".9"/>
      {/* glow */}
      <path d={d} fill="none" stroke={accent} strokeWidth="9" opacity=".08"/>
    </svg>
  );
}
