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
  const [activeTab, setActiveTab] = useState("ALL");
  const [closing, setClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    ALL: [...weapons, ...shields, ...armors, ...trinkets],
  };

  let filteredItems = tabData[activeTab] || [];

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();

    filteredItems = filteredItems.filter((equip) => {
      if (
        equip.name.toLowerCase().includes(query) ||
        (equip.skill &&
          typeof equip.skill === "string" &&
          equip.skill.toLowerCase().includes(query)) ||
        equip.acquisition.toLowerCase().includes(query) ||
        equip?.materials?.some((material) =>
          material.toLowerCase().includes(query.toLowerCase()),
        )
      ) {
        return equip.name.toLowerCase();
      }

      return false;
    });
  }

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
        {["ALL", "WEAPONS", "SHIELDS", "ARMOR", "TRINKETS"].map((tab) => (
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
      <div className="search-box">
        <input
          type="text"
          placeholder="Search equipment name, material, location, skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="equip-grid">
        {filteredItems.map((equip) => (
          <div
            key={equip.name}
            className="equip-card"
            onClick={() => {
              navigate(`/equip/${equip.name}`);
            }}
          >
            {equip.element && (
              <img
                src={equip.element}
                alt="Element"
                className="equip-element-icon"
              />
            )}
            <img
              src={equip.image}
              alt={equip.name}
              className="equip-card-image"
            />
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
