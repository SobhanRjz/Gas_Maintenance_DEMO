import React from "react";

interface CardProps {
  title: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({title, meta, children, className = ""}: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {meta && <div className="card-meta">{meta}</div>}
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export function KPI({title,value,tone,trend}:{title:string;value:string;tone?:"ok"|"warn"|"danger"; trend?:"up"|"down"|"stable"}) {
  return (
    <div className="card kpi">
      <div className="card-content">
        <div className="kpi-value">{value}</div>
        <div className="kpi-label">{title}</div>
        <div className="kpi-footer">
          {trend && (
            <div className={`kpi-trend trend-${trend}`}>
              <span className="trend-icon">
                {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
              </span>
              <span className="trend-label">
                {trend === 'up' ? '+2.1%' : trend === 'down' ? '-1.3%' : '±0.5%'}
              </span>
            </div>
          )}
          {tone && <span className={`badge ${tone}`}>
            {tone==="ok"?"Stable":tone==="warn"?"Attention":"Critical"}
          </span>}
        </div>
      </div>
    </div>
  );
}
