import { Route, Routes, useLocation } from "react-router-dom";
import "../astlibra.css";
import Sidebar from "./Sidebar";
import EquipScreen from "./EquipScreen";
import KaronScreen from "./KaronScreen";
import ItemScreen from "./ItemScreen";
import LibraScreen from "./LibraScreen";

export default function MainScreen() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const current = location.pathname.replace("/", "").toUpperCase();

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        {/* HOME (no selection) */}
        {!current && (
          <div className="home-panel">
            <h1 className="title">Astlibra Codex</h1>
            <p className="subtitle">
              Select an option on the sidebar to see its contents
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

          <Route path="/libra" element={<LibraScreen />} />
        </Routes>
      </div>
    </div>
  );
}
