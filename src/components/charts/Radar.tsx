type P={axes:{label:string;value:number}[]; size?:number}
export default function Radar({axes,size=260}:P){
  const cx= size/2, cy=size/2, r=size*0.36, n=axes.length;
  const polar=(i:number, val:number)=> {
    const ang= -Math.PI/2 + (i/n)*Math.PI*2;
    const rr = r*(val/100);
    return [cx+rr*Math.cos(ang), cy+rr*Math.sin(ang)];
  };
  const ring=(k:number)=> Array.from({length:n},(_,i)=>{
    const [x,y]=polar(i,k); return `${i?'L':'M'}${x},${y}`;
  }).join(' ')+' Z';

  const path=axes.map((a,i)=>polar(i,a.value)).map(([x,y],i)=>`${i?'L':'M'}${x},${y}`).join(' ')+' Z';

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
      {[25,50,75,100].map(k=>(
        <path key={k} d={ring(k)} fill="none" stroke="rgba(255,255,255,.06)"/>
      ))}
      {axes.map((a,i)=>{
        const [x,y]=polar(i,110);
        return <text key={a.label} x={x} y={y} fontSize="11" fill="var(--muted)" textAnchor="middle">{a.label}</text>
      })}
      <path d={path} fill="rgba(34,227,196,.12)" stroke="var(--accent)"/>
    </svg>
  );
}
