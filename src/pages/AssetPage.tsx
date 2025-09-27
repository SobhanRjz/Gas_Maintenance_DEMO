import { useParams, Link } from "react-router-dom";
import { assets } from "../lib/config";

export default function AssetPage() {
  const { assetId } = useParams<{assetId: string}>();
  const asset = assets.find(a => a.id === assetId);

  if (!asset) {
    return (
      <div className="card">
        <h3>Asset not found</h3>
        <Link className="btn ghost" to="/maintenance">← Back to Maintenance</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>{asset.name}</h3>
        <Link className="btn ghost" to="/maintenance">← Back</Link>
      </div>

      <div className="list">
        <div><b>Component:</b> {asset.component}</div>
        <div><b>Downtime Impact:</b> {asset.downtime_impact}</div>
        <div><b>Action:</b> {asset.action ?? "Monitor"}</div>
        <div><b>Failure Modes:</b> {asset.failure_modes.join(", ") || "—"}</div>
        <div><b>Tags:</b> {asset.tags.join(", ") || "—"}</div>
      </div>

      <div className="section-separator" />

      <div className="card">
        <div className="card-header">
          <h4>Health score formula</h4>
        </div>
        <p className="card-description" style={{marginTop: 0}}>
          {asset.risk_calc.health_score_formula}
        </p>
      </div>
    </div>
  );
}
