import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.jpg";

export default function Header() {
  const navigate = useNavigate();
  const [hasUnreadNotifications] = useState(true); // Mock state
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleBrandClick = () => {
    navigate('/');
  };

  const handleNotificationClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left: Branding */}
        <div
          className="brand"
          onClick={handleBrandClick}
          role="button"
          tabIndex={0}
          aria-label="Go to Overview"
        >
          <div className="logo">
            <img src={logo} alt="Company Logo" className="header-logo" />
          </div>
          <span className="brand-name">Predictive Maintenance</span>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <NavLink to="/dashboard" end className="nav-link">
            Overview
          </NavLink>
          <NavLink to="/maintenance" className="nav-link">
            Maintenance
          </NavLink>
          <NavLink to="/assets" className="nav-link">
            Assets
          </NavLink>
          <NavLink to="/work-orders" className="nav-link">
            Work Orders
          </NavLink>
          <NavLink to="/analytics" className="nav-link">
            Analytics
          </NavLink>
        </nav>

        {/* Right: Primary Actions */}
        <div className="actions">
          <button
            className="action-btn notification-btn"
            aria-label="Notifications"
            onClick={handleNotificationClick}
          >
            <span className="icon">🔔</span>
            {hasUnreadNotifications && <span className="notification-badge">3</span>}
          </button>

          <button className="action-btn" aria-label="Settings">
            <span className="icon">⚙️</span>
          </button>

          <div className="avatar" role="button" tabIndex={0} aria-label="User profile menu">
            <span>SR</span>
          </div>
        </div>
      </div>

      {/* Notifications Drawer (simplified) */}
      <div className={`notifications-drawer ${isNotificationsOpen ? 'open' : ''}`}>
        <div className="notifications-overlay" onClick={() => setIsNotificationsOpen(false)}></div>
        <div className="notifications-panel">
          <div className="notifications-header">
            <h3>Notifications</h3>
            <button className="close-btn" onClick={() => setIsNotificationsOpen(false)}>×</button>
          </div>
          <div className="notifications-content">
            <div className="notification-item">
              <span className="notification-icon">🚨</span>
              <div className="notification-content">
                <div className="notification-title">Compressor #3 Vibration Spike</div>
                <div className="notification-message">Vibration levels exceeded threshold by 45%</div>
                <div className="notification-time">2 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
