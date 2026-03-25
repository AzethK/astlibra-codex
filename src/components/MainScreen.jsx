import React, { useState } from "react";
import "../astlibra.css";
import Sidebar from "./Sidebar";
import EquipScreen from "./EquipScreen";

export default function MainScreen() {
  const [sidebarActive, setSidebarActive] = useState(null);

  return (
    <div className="app-container">
      <Sidebar
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      />

      {/* Main content */}
      <div className="main-content">
        {!sidebarActive && (
          <div className="home-panel">
            <h1 className="title">Astlibra Codex</h1>
            <p className="subtitle">
              Select an option on the sidebar to see its contents
            </p>
          </div>
        )}

        {sidebarActive === "EQUIP" && <EquipScreen />}
      </div>
    </div>
  );
}
