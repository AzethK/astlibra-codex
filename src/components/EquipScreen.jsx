import React, { useState, useEffect } from "react";
import weapons from "../data/weapons";
import shields from "../data/shields";
import armors from "../data/armors";
import trinkets from "../data/trinkets";
import EquipModal from "./EquipModal";
import { useNavigate, useParams } from "react-router-dom";

export default function EquipScreen() {
  const { equipName } = useParams();
  const navigate = useNavigate();
  const [selectedEquip, setSelectedEquip] = useState(null);
  const [activeTab, setActiveTab] = useState("WEAPONS");
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/equip");
      setClosing(false);
    }, 200);
  };

  const tabData = {
    WEAPONS: weapons,
    SHIELDS: shields,
    ARMOR: armors,
    TRINKETS: trinkets,
  };

  useEffect(() => {
    if (!equipName) {
      setSelectedEquip(null);
      return;
    }

    const allEquips = Object.values(tabData).flat();
    const foundEquip = allEquips.find((equip) => equip.name === equipName);

    if (foundEquip) {
      setSelectedEquip(foundEquip);

      const tabEntry = Object.entries(tabData).find(([_, equips]) =>
        equips.some((e) => e.name === equipName),
      );

      if (tabEntry) {
        setActiveTab(tabEntry[0]);
      }
    }
  }, [equipName]);

  return (
    <div className="equip-container">
      <div className="equip-tabs">
        {["WEAPONS", "SHIELDS", "ARMOR", "TRINKETS"].map((tab) => (
          <button
            key={tab}
            className={`equip-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedEquip(null);
              navigate("/equip");
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="equip-grid">
        {tabData[activeTab].map((equip) => (
          <div
            key={equip.name}
            className="equip-card"
            onClick={() => {
              navigate(`/equip/${equip.name}`);
            }}
          >
            <img src={equip.image} alt={equip.name} />
            <h3>{equip.name}</h3>
          </div>
        ))}
      </div>

      {selectedEquip && (
        <EquipModal
          equip={selectedEquip}
          tab={activeTab}
          closing={closing}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
