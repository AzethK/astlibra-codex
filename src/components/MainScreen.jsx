import { useLocation } from "react-router-dom";
import "../astlibra.css";
import Sidebar from "./Sidebar";
import EquipScreen from "./EquipScreen";
import KaronScreen from "./KaronScreen";

export default function MainScreen() {
  const location = useLocation();
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

        {/* ROUTES */}
        {current === "EQUIP" && <EquipScreen />}

        {current === "KARON" && <KaronScreen />}
      </div>
    </div>
  );
}
