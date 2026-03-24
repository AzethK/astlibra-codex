import React, { useState } from "react";
import "../astlibra.css";
import Sidebar from "./Sidebar";

export default function MainScreen() {
  const [active, setActive] = useState(null);
  return (
    <div className="app-container">
      <Sidebar active={active} setActive={setActive} />
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
