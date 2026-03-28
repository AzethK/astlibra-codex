import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import items from "../data/items";

export default function ItemScreen() {
  const { itemName } = useParams();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");

  const activeItems =
    activeTab != "ALL" ?
      items.filter((item) => item.type.toUpperCase() === activeTab)
    : items;

  useEffect(() => {
    if (!itemName) {
      setSelectedItem(null);
      return;
    }

    const decodedName = decodeURIComponent(itemName);

    const foundItem = items.find((k) => k.name === decodedName);

    if (foundItem) {
      setSelectedItem(foundItem);
      if (activeTab != "ALL") setActiveTab(foundItem.type.toUpperCase());
    }
  }, [itemName]);

  return (
    <div className="equip-container">
      <div className="equip-tabs">
        {[
          "ALL",
          "MISCELLANEOUS",
          "SECONDARY WEAPON",
          "MEDICINES/BOTTLES",
          "FOOD",
          "FOOD INGREDIENTS",
          "BOOKS/CARDS",
          "ORE/GEMS",
          "DEMON MATERIALS",
          "VALUABLES",
          "COLLECTED ITEMS",
        ].map((tab) => (
          <button
            key={tab}
            className={`equip-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedItem(null);
              navigate("/item");
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="equip-grid">
        {activeItems.map((item) => (
          <div
            key={item.name}
            className={`equip-card ${selectedItem?.name === item.name ? "selected" : ""} `}
            onClick={() => {
              navigate(`/item/${item.name}`);
            }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      <div
        className={`karon-overlay ${selectedItem ? "visible" : ""}`}
        onClick={() => {
          setSelectedItem(null);
          navigate(`/item/`);
        }}
      />

      <div className={`karon-info-box ${selectedItem ? "visible" : ""}`}>
        {selectedItem && (
          <>
            <div className="equip-image-container">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="equip-image"
              />
            </div>
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            {selectedItem.acquisition && (
              <p>
                Acquisition: <span>{selectedItem.acquisition}</span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
