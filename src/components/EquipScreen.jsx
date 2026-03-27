import React, { useState, useEffect } from "react";
import weapons from "../data/weapons";
import shields from "../data/shields";
import armors from "../data/armors";
import trinkets from "../data/trinkets";
import EquipModal from "./EquipModal";
import { useNavigate, useParams } from "react-router-dom";

export default function EquipScreen() {
  const { itemName } = useParams();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
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
    if (!itemName) {
      setSelectedItem(null);
      return;
    }

    const allItems = Object.values(tabData).flat();
    const foundItem = allItems.find((item) => item.name === itemName);

    if (foundItem) {
      setSelectedItem(foundItem);

      const tabEntry = Object.entries(tabData).find(([_, items]) =>
        items.some((i) => i.name === itemName),
      );

      if (tabEntry) {
        setActiveTab(tabEntry[0]);
      }
    }
  }, [itemName]);

  return (
    <div className="equip-container">
      <div className="equip-tabs">
        {["WEAPONS", "SHIELDS", "ARMOR", "TRINKETS"].map((tab) => (
          <button
            key={tab}
            className={`equip-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedItem(null);
              navigate("/equip");
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
            onClick={() => {
              navigate(`/equip/${item.name}`);
            }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {selectedItem && (
        <EquipModal
          equip={selectedItem}
          tab={activeTab}
          closing={closing}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
