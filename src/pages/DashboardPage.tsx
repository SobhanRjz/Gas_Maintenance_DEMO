import { Card, KPI } from "../components/Card";
import MiniLine from "../components/charts/MiniLine";

export default function DashboardPage() {
  return (
    <>
      {/* Row 1: Snapshot KPIs - Quick-glance stats */}
      <section className="dashboard-row snapshot-row">
        <div className="row-header">
          <h2 className="row-title">Equipment Overview</h2>
          <p className="row-subtitle">Key performance indicators at a glance</p>
        </div>
        <div className="grid kpi">
          <KPI title="Equipment Health Score" value="91" tone="ok" trend="up" />
          <KPI title="Active Alarms" value="3" tone="warn" trend="down" />
          <KPI title="Unplanned Downtime / month" value="1.2h" tone="ok" trend="stable" />
        </div>
      </section>

      {/* Row 2: Charts - Trends and distributions */}
      <section className="dashboard-row charts-row">
        {/* Component Health Section */}
        <div className="chart-section">
          <div className="row-header">
            <h2 className="row-title">Component Health</h2>
          </div>
          <div className="grid centered" style={{marginBottom: '16px'}}>
            <Card title="Component Health Status" meta="9 Component Monitored" className="wide">
            {/* Add health state breakdown */}
            <div className="health-breakdown">
              <div className="health-item">
                <span className="health-label">Normal</span>
                <span className="health-value">67%</span>
                <div className="health-bar">
                  <div className="health-fill normal" style={{width: '67%'}}></div>
                </div>
              </div>
              <div className="health-item">
                <span className="health-label">Medium</span>
                <span className="health-value">12%</span>
                <div className="health-bar">
                  <div className="health-fill warning" style={{width: '12%'}}></div>
                </div>
              </div>
              <div className="health-item">
                <span className="health-label">Critical</span>
                <span className="health-value">21%</span>
                <div className="health-bar">
                  <div className="health-fill critical" style={{width: '21%'}}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        </div>

        {/* Vibration Analysis Section */}
        <div className="chart-section">
          <div className="row-header">
            <h2 className="row-title">Vibration Analysis</h2>
          </div>
          <div className="grid">
            <Card title="Bearing Vibration Trend - DE Side" meta="Last 24h • Updated 3 min ago">
            <div className="chart-container">
              <div className="axis-title y-axis">Vibration (mm/s)</div>
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
              <div className="threshold-labels">
                <span className="threshold-label hh">7.0mm/s</span>
                <span className="threshold-label h">4.5mm/s</span>
                <span className="threshold-label n">2.5mm/s</span>
                <span className="threshold-label l">1.5mm/s</span>
                <span className="threshold-label ll">0.5mm/s</span>
              </div>
              <div className="axis-title x-axis">Time (hours)</div>
            </div>
          </Card>
        </div>
        </div>

        {/* Sensor Analysis Section */}
        <div className="chart-section">
          <div className="row-header">
            <h2 className="row-title">Sensor Analysis</h2>
            <p className="row-subtitle">Real-time monitoring of critical parameters</p>
          </div>
          <div className="grid three">
            <Card title="Motor Current" meta="3-Phase • Last 24h">
              <div className="chart-container">
                <div className="axis-title y-axis">Current (A)</div>
                <div className="threshold-bands">
                  <div className="band band-hh"></div>
                  <div className="band band-h"></div>
                  <div className="band band-n"></div>
                  <div className="band band-l"></div>
                  <div className="band band-ll"></div>
                </div>
                <MiniLine
                  h={220}
                  points={[185, 188, 190, 192, 195, 198, 202, 205, 208, 210, 215, 218, 220, 223, 225, 228, 230]}
                  accent="#f59e0b"
                />
                <div className="threshold-labels">
                  <span className="threshold-label hh">250A</span>
                  <span className="threshold-label h">220A</span>
                  <span className="threshold-label n">200A</span>
                  <span className="threshold-label l">180A</span>
                  <span className="threshold-label ll">160A</span>
                </div>
                <div className="axis-title x-axis">Time (hours)</div>
              </div>
            </Card>

            <Card title="Discharge Pressure" meta="Stage 1 • Last 24h">
              <div className="chart-container">
                <div className="axis-title y-axis">Pressure (bar)</div>
                <div className="threshold-bands">
                  <div className="band band-hh"></div>
                  <div className="band band-h"></div>
                  <div className="band band-n"></div>
                  <div className="band band-l"></div>
                  <div className="band band-ll"></div>
                </div>
                <MiniLine
                  h={220}
                  points={[42.1, 42.5, 42.8, 43.2, 43.5, 43.8, 44.1, 44.5, 44.8, 45.2, 45.5, 45.8, 46.1, 46.5, 46.8, 47.2, 47.5]}
                  accent="#10b981"
                />
                <div className="threshold-labels">
                  <span className="threshold-label hh">52bar</span>
                  <span className="threshold-label h">48bar</span>
                  <span className="threshold-label n">45bar</span>
                  <span className="threshold-label l">42bar</span>
                  <span className="threshold-label ll">38bar</span>
                </div>
                <div className="axis-title x-axis">Time (hours)</div>
              </div>
            </Card>

            <Card title="Bearing Temperature" meta="DE Side • Last 24h">
              <div className="chart-container">
                <div className="axis-title y-axis">Temperature (°C)</div>
                <div className="threshold-bands">
                  <div className="band band-hh"></div>
                  <div className="band band-h"></div>
                  <div className="band band-n"></div>
                  <div className="band band-l"></div>
                  <div className="band band-ll"></div>
                </div>
                <MiniLine
                  h={220}
                  points={[68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]}
                  accent="#ef4444"
                />
                <div className="threshold-labels">
                  <span className="threshold-label hh">110°C</span>
                  <span className="threshold-label h">95°C</span>
                  <span className="threshold-label n">80°C</span>
                  <span className="threshold-label l">65°C</span>
                  <span className="threshold-label ll">50°C</span>
                </div>
                <div className="axis-title x-axis">Time (hours)</div>
              </div>
            </Card>
          </div>
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
          <Card title="Priority Alarms" meta="3 active">
            <div className="critical-alerts">
              <div className="alert-row">
                <div className="alert-severity">
                  <span className="severity-chip alert-critical">CR</span>
                </div>
                <div className="alert-asset">Gas Turbine Driver</div>
                <div className="alert-cause">Exhaust temp spread 15°C &gt; 10°C limit</div>
                <div className="alert-time">2 min ago</div>
                <div className="alert-action">
                  <button className="action-btn-small critical">Shutdown</button>
                </div>
              </div>

              <div className="alert-row">
                <div className="alert-severity">
                  <span className="severity-chip alert-critical">CR</span>
                </div>
                <div className="alert-asset">Motor Drive</div>
                <div className="alert-cause">Current imbalance 45A &gt; 40A limit</div>
                <div className="alert-time">5 min ago</div>
                <div className="alert-action">
                  <button className="action-btn-small critical">Check Motor</button>
                </div>
              </div>

              <div className="alert-row">
                <div className="alert-severity">
                  <span className="severity-chip alert-medium">M</span>
                </div>
                <div className="alert-asset">Compressor Bearing (DE)</div>
                <div className="alert-cause">Vibration 4.2 mm/s &gt; 4.0 limit</div>
                <div className="alert-time">8 min ago</div>
                <div className="alert-action">
                  <button className="action-btn-small warning">Inspect</button>
                </div>
              </div>

            </div>
          </Card>

          {/* Next 7 Days Timeline */}
          <Card title="Work Order Schedule" meta="Next 7 days">
            <div className="maintenance-timeline">
              {/* Oct 3, 2025 */}
              <div className="timeline-day">
                <div className="day-label">Oct 3, 2025</div>
                <div className="day-jobs">
                  <div className="job-pill priority-medium">
                    <span className="job-title">Compressor Bearing (DE) - Inspect</span>
                    <span className="job-priority">Normal Priority</span>
                  </div>
                </div>
              </div>

              {/* Oct 10, 2025 */}
              <div className="timeline-day">
                <div className="day-label">Oct 10, 2025</div>
                <div className="day-jobs">
                  <div className="job-pill priority-critical">
                    <span className="job-title">Motor Drive - Replace/Overhaul</span>
                    <span className="job-priority">Normal Priority</span>
                  </div>
                </div>
              </div>

              {/* Oct 17, 2025 */}
              <div className="timeline-day">
                <div className="day-label">Oct 17, 2025</div>
                <div className="day-jobs">
                  <div className="job-pill priority-critical">
                    <span className="job-title">Gas Turbine Driver - Overhaul Check</span>
                    <span className="job-priority">Critical Priority</span>
                  </div>
                </div>
              </div>

              {/* Oct 24, 2025 */}
              <div className="timeline-day">
                <div className="day-label">Oct 24, 2025</div>
                <div className="day-jobs">
                  <div className="job-pill priority-low">
                    <span className="job-title">Lube Oil System - Monitor</span>
                    <span className="job-priority">Low Priority</span>
                  </div>
                </div>
              </div>

              {/* Oct 31, 2025 */}
              <div className="timeline-day">
                <div className="day-label">Oct 31, 2025</div>
                <div className="day-jobs">
                  <div className="job-pill priority-low">
                    <span className="job-title">Seal Gas System - Monitor</span>
                    <span className="job-priority">Low Priority</span>
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
