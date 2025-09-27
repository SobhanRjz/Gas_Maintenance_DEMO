import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import MaintenancePage from "./pages/MaintenancePage";
import AssetPage from "./pages/AssetPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={
        <>
          <Header />
          <main className="container">
            <DashboardPage />
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
      <Route path="/maintenance" element={
        <>
          <Header />
          <main className="container">
            <MaintenancePage />
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
      <Route path="/maintenance" element={
        <>
          <Header />
          <main className="container">
            <MaintenancePage />
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
      <Route path="/assets" element={
        <>
          <Header />
          <main className="container">
            <div className="card"><h3>Assets Page</h3><p>Coming soon...</p></div>
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
      <Route path="/work-orders" element={
        <>
          <Header />
          <main className="container">
            <div className="card"><h3>Work Orders Page</h3><p>Coming soon...</p></div>
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
      <Route path="/analytics" element={
        <>
          <Header />
          <main className="container">
            <div className="card"><h3>Analytics Page</h3><p>Coming soon...</p></div>
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
      <Route path="/asset/:assetId" element={
        <>
          <Header />
          <main className="container">
            <AssetPage />
          </main>
          <footer className="foot">
            <div>
              <span>© Gas Compressor PM</span>
              <span className="muted"> • Monitor • Predict • Maintain</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Docs</a>
              <a href="#" className="social-link">Contact</a>
            </div>
          </footer>
        </>
      } />
    </Routes>
  );
}
