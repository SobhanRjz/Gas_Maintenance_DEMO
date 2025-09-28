import { useMemo, useState } from "react";
import { assets } from "../lib/config";
import { Link } from "react-router-dom";

type Filter = "all" | "critical" | "maintenance";

function riskBadge(impact: string) {
  switch (impact.toLowerCase()) {
    case "critical":
    case "high": return <span className="risk-badge high">Critical</span>;
    case "medium": return <span className="risk-badge medium">Medium</span>;
    case "normal": return <span className="risk-badge low">Normal</span>;
    default: return <span className="risk-badge low">Low</span>;
  }
}


export default function MaintenancePage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [isExporting, setIsExporting] = useState(false);

  const filtered = useMemo(() => {
    if (filter === "critical") {
      return assets.filter(a => a.downtime_impact.toLowerCase() === "critical");
    }
    if (filter === "maintenance") {
      // simple heuristic: anything not "Monitor" needs maintenance soon
      return assets.filter(a => (a.action ?? "").toLowerCase() !== "monitor");
    }
    return assets;
  }, [filter]);

  const handleExportReport = async () => {
    setIsExporting(true);
    // Mock export delay
    setTimeout(() => {
      setIsExporting(false);
      console.log('Report exported');
    }, 2000);
  };

  return (
    <>
      <div className="panel-header">
        <h1>Predictive Maintenance</h1>
        <div className="panel-actions">
          <button className="btn" onClick={handleExportReport} disabled={isExporting}>
            {isExporting ? (
              <>
                <span className="spinner"></span>
                Exporting...
              </>
            ) : (
              'Export Report'
            )}
          </button>
          <button className="btn ghost" onClick={() => setFilter("all")}>Reset</button>
        </div>
      </div>

      {/* Overall health style block like result.html */}


      {/* Asset matrix table — styled with your CSS */}
      <div className="enhanced-asset-health">
        <div className="table-header">
          <h3>📊 Detailed Component Health Matrix</h3>
          <div className="table-controls">
            <select className="select-control" value={filter} onChange={e => setFilter(e.target.value as Filter)}>
              <option value="all">All Components</option>
              <option value="critical">Critical Only</option>
              <option value="maintenance">Due for Maintenance</option>
            </select>
          </div>
        </div>

        <div className="asset-table-container">
          <table className="asset-health-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Area</th>
                <th>Health Score</th>
                <th>Risk Level</th>
                <th>Failure Mode</th>
                <th>Days to Action</th>
                <th>Trend</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(a => {
                // Static health score based on downtime impact
                const healthScore = a.downtime_impact.toLowerCase() === 'critical' ? 15 :
                                   a.downtime_impact.toLowerCase() === 'high' ? 35 :
                                   a.downtime_impact.toLowerCase() === 'medium' ? 65 : 85;

                // Calculate days to action based on multiple factors
                let daysToAction;
                if (a.days_to_action_logic === "threshold_crossing") {
                  daysToAction = Math.floor(Math.random() * 30) + 1;
                } else if (a.action === "Monitor") {
                  daysToAction = Math.floor(Math.random() * 90) + 30; // 30-120 days for monitoring
                } else if (a.downtime_impact === "Critical") {
                  daysToAction = Math.floor(Math.random() * 7) + 1; // 1-7 days for critical
                } else if (a.downtime_impact === "High") {
                  daysToAction = Math.floor(Math.random() * 14) + 1; // 1-14 days for high
                } else if (a.downtime_impact === "Medium") {
                  daysToAction = Math.floor(Math.random() * 30) + 7; // 7-37 days for medium
                } else {
                  daysToAction = Math.floor(Math.random() * 60) + 14; // 14-74 days for low
                }

                const trend = Math.random() > 0.5 ? "stable" : Math.random() > 0.5 ? "up" : "down";

                return (
                  <tr key={a.id}>
                    <td>{a.name}</td>
                    <td>{a.component}</td>
                    <td>
                      <span className={`health-score ${healthScore > 50 ? 'normal' : healthScore > 20 ? 'medium' : 'critical'}`}>
                        {healthScore}
                      </span>
                    </td>
                    <td>{riskBadge(healthScore > 50 ? 'normal' : healthScore > 20 ? 'medium' : 'critical')}</td>
                    <td>{a.failure_modes[0] || "N/A"}</td>
                    <td>{daysToAction}</td>
                    <td>
                      <span className={`trend-indicator trend-${trend}`}>
                        {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
                      </span>
                    </td>
                    <td>
                      <Link className="btn ghost btn-xs" to={`/asset/${encodeURIComponent(a.id)}`}>
                        <span className="cta-icon">🔍</span>
                        details
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={9}>No assets match this filter.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance Timeline */}
      <div className="maintenance-timeline-card" style={{marginTop: 32}}>
        <div className="timeline-header">
          <h4>🛠️ Maintenance Schedule</h4>
        </div>
        <div className="timeline-content">
          <div className="timeline">
            {filtered.slice(0, 5).map((a, i) => {
              // Calculate health score and priority based on risk level
              const healthScore = a.downtime_impact.toLowerCase() === 'critical' ? 15 :
                                 a.downtime_impact.toLowerCase() === 'high' ? 35 :
                                 a.downtime_impact.toLowerCase() === 'medium' ? 65 : 85;
              const priority = healthScore > 50 ? 'Normal' : healthScore > 20 ? 'Medium' : 'Critical';
              const date = new Date(Date.now() + (i*7+5)*24*3600*1000)
                .toLocaleDateString("en-US",{month:"short", day:"numeric", year:"numeric"});
              const isLast = i === filtered.slice(0, 5).length - 1;

              return (
                <div className="timeline-item" key={a.id}>
                  <div className="timeline-marker">
                    <div className={`timeline-dot priority-${priority.toLowerCase()}`}></div>
                    {!isLast && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content-block">
                    <div
                      className="timeline-date"
                      title={`Inspection scope: ${a.component} - ${a.failure_modes.join(", ")}`}
                    >
                      {date}
                    </div>
                    <div className="timeline-task">{a.name} - {a.action ?? "Monitor"}</div>
                    <div className={`timeline-priority priority-${priority.toLowerCase()}`}>
                      {priority} Priority
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
