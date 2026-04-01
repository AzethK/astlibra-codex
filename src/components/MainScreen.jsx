import { Route, Routes, useLocation } from "react-router-dom";
import "../astlibra.css";
import Sidebar from "./Sidebar";
import EquipScreen from "./EquipScreen";
import KaronScreen from "./KaronScreen";
import ItemScreen from "./ItemScreen";
import LibraScreen from "./LibraScreen";
import SkillScreen from "./SkillScreen";
import { useState } from "react";

export default function MainScreen() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const current = location.pathname.replace("/", "").toUpperCase();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <button
        className="menu-button"
        onClick={() =>
          sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)
        }
      >
        ☰
      </button>
      <Sidebar open={sidebarOpen} />

      <div className="main-content" onClick={() => setSidebarOpen(false)}>
        {/* HOME (no selection) */}
        {!current && (
          <div className="home-panel">
            <h1 className="title">Astlibra Codex</h1>
            <p className="subtitle">
              Select an option on the sidebar to see its contents
              <p>(Be aware that items and skills are still being added)</p>
            </p>
          </div>
        )}

        <Routes>
          <Route path="/equip" element={<EquipScreen />} />
          <Route path="/equip/:equipName" element={<EquipScreen />} />
          <Route path="/karon" element={<KaronScreen />} />
          <Route path="/karon/:karonName" element={<KaronScreen />} />
          <Route path="/item" element={<ItemScreen />} />
          <Route path="/item/:itemName" element={<ItemScreen />} />
          <Route path="/skill" element={<SkillScreen />} />
          <Route path="/skill/:skillName" element={<SkillScreen />} />

          <Route path="/libra" element={<LibraScreen />} />
        </Routes>
      </div>
    </div>
  );
}
