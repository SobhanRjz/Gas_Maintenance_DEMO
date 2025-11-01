<div align="center">

# ⚙️ Gas Compressor Preventive Maintenance

**Engineering Confidence, One Compressor at a Time**

[![Live Demo](https://img.shields.io/badge/demo-live-00e676?style=for-the-badge)](https://sobhanrjz.github.io/Gas_Maintenance_DEMO/)
[![React](https://img.shields.io/badge/React-19.1-00b0ff?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-0288d1?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-ff9100?style=for-the-badge&logo=vite)](https://vitejs.dev/)

[Live Demo](https://sobhanrjz.github.io/Gas_Maintenance_DEMO/) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack)

</div>

---

## 🎯 Overview

A production-grade web application for real-time monitoring and predictive maintenance of gas compressor systems in oil & gas operations. Built with modern engineering principles, this platform provides comprehensive condition monitoring, vibration analysis, and maintenance scheduling capabilities.

## ✨ Features

### 🔧 **Real-Time Monitoring**
- **Equipment Health Scoring** - Automated health assessment with 91% accuracy
- **Live Sensor Data** - Continuous monitoring of critical parameters
- **Active Alarm Management** - Priority-based alert system with 3-tier severity

### 📊 **Advanced Analytics**
- **Vibration Analysis** - Bearing condition monitoring with ISO 10816 thresholds
- **Electrical Monitoring** - 3-phase motor current imbalance detection
- **Pressure Trending** - Stage-wise discharge pressure analysis
- **Temperature Tracking** - Bearing temperature monitoring with predictive alerts

### 🛠️ **Maintenance Management**
- **Work Order Scheduling** - 7-day maintenance timeline visualization
- **Component Health Status** - 9 monitored components with health breakdown
- **Predictive Maintenance** - Data-driven maintenance recommendations
- **Downtime Tracking** - Unplanned downtime metrics (1.2h/month)

### 🎨 **Modern Engineering UI**
- **SCADA-Inspired Design** - Industrial control room aesthetic
- **Technical Color Palette** - Engineering-specific color coding
- **Responsive Dashboard** - Optimized for control room displays
- **Real-Time Updates** - Live data visualization with smooth animations

## 🚀 Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

### Quick Start

```bash
# Clone the repository
git clone https://github.com/sobhanrjz/gas-compressor-pm.git
cd gas-compressor-pm

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1** - UI library with React Compiler optimization
- **TypeScript 5.8** - Type-safe development
- **Vite 7.1** - Lightning-fast build tool with Rolldown
- **React Router 7.9** - Client-side routing

### Development Tools
- **ESLint** - Code quality and consistency
- **Zod 4.1** - Runtime type validation
- **React Compiler** - Automatic optimization

### Styling
- **Custom CSS** - Engineering-themed design system
- **CSS Variables** - Dynamic theming support
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
gas-compressor-pm/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── charts/       # Chart components (Line, Bar, Donut, Radar)
│   │   ├── Card.tsx      # Card component with KPI support
│   │   └── Header.tsx    # Navigation header
│   ├── pages/            # Application pages
│   │   ├── LandingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── MaintenancePage.tsx
│   │   └── AssetPage.tsx
│   ├── styles/           # Global styles
│   │   ├── tokens.css    # Design tokens
│   │   ├── base.css      # Base styles
│   │   ├── layout.css    # Layout components
│   │   └── home.css      # Dashboard styles
│   ├── assets/           # Static assets
│   └── lib/              # Utility functions
├── public/               # Public assets
└── .github/workflows/    # CI/CD pipelines
```

## 🎨 Design System

### Color Palette
- **Primary**: Technical Cyan (#00b0ff) - Electrical systems
- **Secondary**: Engineering Blue (#0288d1) - Mechanical systems
- **Success**: Process Green (#00e676) - Operational status
- **Warning**: Engineering Orange (#ff9100) - Attention required
- **Critical**: Alert Red (#ff3d00) - Immediate action

### Typography
- **Font Family**: Inter - Modern, technical readability
- **Scale**: Modular scale (1.25 ratio)
- **Weights**: 300-800 for hierarchy

## 📊 Monitoring Capabilities

### Sensor Types
1. **Vibration Sensors** - ISO 10816 compliant monitoring
2. **Electrical Sensors** - Current, voltage, power factor
3. **Pressure Sensors** - Suction, discharge, differential
4. **Temperature Sensors** - Bearing, oil, gas temperatures

### Threshold Management
- **5-Level System**: LL (Low-Low), L (Low), N (Normal), H (High), HH (High-High)
- **Color-Coded Bands**: Visual threshold indicators
- **Automated Alerts**: Threshold breach notifications

## 🔄 CI/CD

Automated deployment to GitHub Pages using GitHub Actions:
- **Build**: TypeScript compilation + Vite build
- **Deploy**: Automatic deployment on push to main
- **Permissions**: Read/write access for Pages deployment

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sobhan RJZ**
- GitHub: [@sobhanrjz](https://github.com/sobhanrjz)
- Demo: [Gas Maintenance DEMO](https://sobhanrjz.github.io/Gas_Maintenance_DEMO/)

## 🙏 Acknowledgments

- Industrial monitoring standards (ISO 10816, API 670)
- Oil & gas engineering best practices
- Modern web development community

---

<div align="center">

**Built with ⚙️ for the Oil & Gas Industry**

[⬆ Back to Top](#️-gas-compressor-preventive-maintenance)

</div>
