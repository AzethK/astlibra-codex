import React, { useState } from "react";
import weapons from "../data/weapons";
import shields from "../data/shields";
import armors from "../data/armors";
import accessories from "../data/accessories";
import WeaponModal from "./WeaponModal";

export default function EquipScreen() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("WEAPONS");

  const tabData = {
    WEAPONS: weapons,
    SHIELDS: shields,
    ARMOR: armors,
    ACCESSORIES: accessories,
  };

  return (
    <div className="equip-container">
      <div className="equip-tabs">
        {["WEAPONS", "SHIELDS", "ARMOR", "ACCESSORIES"].map((tab) => (
          <button
            key={tab}
            className={`equip-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              (setActiveTab(tab), setSelectedItem(null));
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="equip-grid">
        {tabData[activeTab].map((item) => (
          <div
            key={item.name}
            className="equip-card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {selectedItem && activeTab === "WEAPONS" && (
        <WeaponModal
          weapon={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
