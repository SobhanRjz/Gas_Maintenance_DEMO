import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Design tokens and base styles
import "./styles/tokens.css";
import "./styles/base.css";

// Layout components (header, footer, navigation)
import "./styles/layout.css";

// Page-specific styles
import "./styles/home.css";
import "./styles/maintenance.css";
import "./styles/asset.css";

// Reusable component styles
import "./styles/components.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Gas_Maintenance_DEMO/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
