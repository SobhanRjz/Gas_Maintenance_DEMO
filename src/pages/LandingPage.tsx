import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.jpg";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login - in a real app, this would authenticate
    navigate("/dashboard");
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-logo">
        <img src={logo} alt="Company Logo" className="logo-image" />
      </div>
      <div className="landing-content">
        <div className="landing-header">
          <h1 className="landing-title">
            Compressor Predictive Maintenance
          </h1>
          <p className="landing-subtitle">
             Platform
          </p>
          <p className="landing-description">
            Engineering Confidence, One Compressor at a Time.
          </p>
        </div>

        <div className="landing-actions">
          <button className="login-btn" onClick={handleLogin}>
            <span>🔐</span>
            Login to Dashboard
          </button>
        </div>


      </div>
    </div>
  );
}
