import React from "react";
import "../astlibra.css";

export default function MainScreen() {
  return (
    <div className="app-container">
      {/* Sidebar placeholder */}
      <div className="sidebar">{/* Sidebar will go here */}</div>

      {/* Main content */}
      <div className="main-content">
        <div className="menu-panel">
          <h1 className="title">Astlibra Codex</h1>
          <p className="subtitle">
            Select an option on the sidebar to see its contents
          </p>
        </div>
      </div>
    </div>
  );
}
