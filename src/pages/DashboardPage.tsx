import { Card, KPI } from "../components/Card";
import MiniLine from "../components/charts/MiniLine";
import Donut from "../components/charts/Donut";
import Bars from "../components/charts/Bars";

export default function DashboardPage() {
  return (
    <>
      {/* Row 1: Snapshot KPIs - Quick-glance stats */}
      <section className="dashboard-row snapshot-row">
        <div className="row-header">
          <h2 className="row-title">System Snapshot</h2>
          <p className="row-subtitle">Key performance indicators at a glance</p>
        </div>
        <div className="grid kpi">
          <KPI title="Equipment Availability" value="98.2%" tone="ok" trend="up" />
          <KPI title="Active Alarms" value="7" tone="warn" trend="down" />
          <KPI title="Unplanned Downtime" value="1.2h" tone="danger" trend="stable" />
          <KPI title="PM Schedule Adherence" value="96%" tone="ok" trend="up" />
        </div>
      </section>

      {/* Row 2: Charts - Trends and distributions */}
      <section className="dashboard-row charts-row">
        <div className="row-header">
          <h2 className="row-title">Asset Health & Vibration Analysis</h2>
          <p className="row-subtitle">Real-time condition monitoring and predictive analytics</p>
        </div>
        {/* Top row: System Health and PM Completed side by side */}
        <div className="grid two" style={{marginBottom: '16px'}}>
          <Card title="Equipment Health Status" meta="9 Assets Monitored">
            <Donut value={91} label="Operational" />
            {/* Add health state breakdown */}
            <div className="health-breakdown">
              <div className="health-item">
                <span className="health-label">Good</span>
                <span className="health-value">91%</span>
                <div className="health-bar">
                  <div className="health-fill normal" style={{width: '91%'}}></div>
                </div>
              </div>
              <div className="health-item">
                <span className="health-label">Caution</span>
                <span className="health-value">7%</span>
                <div className="health-bar">
                  <div className="health-fill warning" style={{width: '7%'}}></div>
                </div>
              </div>
              <div className="health-item">
                <span className="health-label">Alert</span>
                <span className="health-value">2%</span>
                <div className="health-bar">
                  <div className="health-fill critical" style={{width: '2%'}}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card title="PM Work Order Completion" meta="Last 12 months">
            <Bars vals={[98, 94, 97, 92, 95, 91, 96, 93, 95, 90, 97, 94]} />
            {/* Add target line */}
            <div className="chart-target-line">
              <span className="target-label">Target: 95% | Industry Benchmark: 92%</span>
            </div>
          </Card>
        </div>

        {/* Bottom row: Vibration Severity Trend full width */}
        <div className="grid">
          <Card title="Bearing Vibration Trend - DE Side" meta="Last 24h • Updated 3 min ago">
            <div className="chart-container">
              {/* Threshold bands background */}
              <div className="threshold-bands">
                <div className="band band-hh"></div>
                <div className="band band-h"></div>
                <div className="band band-n"></div>
                <div className="band band-l"></div>
                <div className="band band-ll"></div>
              </div>
              <MiniLine
                h={220}
                points={[2.1, 2.3, 2.0, 2.8, 2.5, 2.2, 3.1, 2.9, 3.4, 3.2, 3.8, 3.0, 2.7, 2.4, 2.1, 1.9, 1.8]}
                accent="var(--accent)"
              />
              {/* Threshold labels */}
              <div className="threshold-labels">
                <span className="threshold-label hh">7.0</span>
                <span className="threshold-label h">4.5</span>
                <span className="threshold-label n">2.5</span>
                <span className="threshold-label l">1.5</span>
                <span className="threshold-label ll">0.5</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Row 3: Alerts & Schedules - Actionable items */}
      <section className="dashboard-row alerts-row">
        <div className="row-header">
          <h2 className="row-title">Critical Alarms & Work Orders</h2>
          <p className="row-subtitle">Priority issues and scheduled maintenance activities</p>
        </div>

        <div className="grid two">
          {/* Critical Alerts List */}
          <Card title="Priority Alarms" meta="7 active">
            <div className="critical-alerts">
              <div className="alert-row">
                <div className="alert-severity">
                  <span className="severity-chip alert-critical">HH</span>
                </div>
                <div className="alert-asset">Bearing DE - Train 1</div>
                <div className="alert-cause">Vibration 4.2 mm/s &gt; 4.0 limit</div>
                <div className="alert-time">8 min ago</div>
                <div className="alert-action">
                  <button className="action-btn-small critical">Inspect</button>
                </div>
              </div>

              <div className="alert-row">
                <div className="alert-severity">
                  <span className="severity-chip alert-high">H</span>
                </div>
                <div className="alert-asset">Seal Gas System</div>
                <div className="alert-cause">DP low 0.18 bar &lt; 0.2 setpoint</div>
                <div className="alert-time">1.2h ago</div>
                <div className="alert-action">
                  <button className="action-btn-small warning">Check Seals</button>
                </div>
              </div>

              <div className="alert-row">
                <div className="alert-severity">
                  <span className="severity-chip alert-medium">M</span>
                </div>
                <div className="alert-asset">Lube Oil System</div>
                <div className="alert-cause">Oil temp 68°C &gt; 65°C limit</div>
                <div className="alert-time">3.5h ago</div>
                <div className="alert-action">
                  <button className="action-btn-small info">Monitor</button>
                </div>
              </div>
            </div>
          </Card>

          {/* Next 7 Days Timeline */}
          <Card title="Work Order Schedule" meta="Next 7 days">
            <div className="maintenance-timeline">
              {/* Today */}
              <div className="timeline-day">
                <div className="day-label">Today</div>
                <div className="day-jobs">
                  <div className="job-pill priority-high">
                    <span className="job-time">14:00</span>
                    <span className="job-title">WO-2024-1847: Vibration Analysis Route</span>
                    <span className="job-duration">2h</span>
                  </div>
                </div>
              </div>

              {/* Tomorrow */}
              <div className="timeline-day">
                <div className="day-label">Tomorrow</div>
                <div className="day-jobs">
                  <div className="job-pill priority-medium">
                    <span className="job-time">08:00</span>
                    <span className="job-title">WO-2024-1851: Lube Oil Filter Change</span>
                    <span className="job-duration">3h</span>
                  </div>
                </div>
              </div>

              {/* Friday */}
              <div className="timeline-day">
                <div className="day-label">Friday</div>
                <div className="day-jobs">
                  <div className="job-pill priority-high">
                    <span className="job-time">10:00</span>
                    <span className="job-title">WO-2024-1855: Anti-Surge Valve Stroke Test</span>
                    <span className="job-duration">4h</span>
                  </div>
                </div>
              </div>

              {/* Next Week */}
              <div className="timeline-day">
                <div className="day-label">Next Week</div>
                <div className="day-jobs">
                  <div className="job-pill priority-medium">
                    <span className="job-time">Mon 06:00</span>
                    <span className="job-title">WO-2024-1862: Intercooler Bundle Inspection</span>
                    <span className="job-duration">8h</span>
                  </div>
                  <div className="job-pill priority-high">
                    <span className="job-time">Thu 07:00</span>
                    <span className="job-title">WO-2024-1868: Bearing Thermography Survey</span>
                    <span className="job-duration">3h</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
