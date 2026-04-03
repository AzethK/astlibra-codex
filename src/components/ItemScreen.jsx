import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import items from "../data/items";
import ItemModal from "./ItemModal";

export default function ItemScreen() {
  const { itemName } = useParams();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const activeItems =
    activeTab != "ALL" ?
      items.filter((item) => item.type.toUpperCase() === activeTab)
    : items;

  let filteredItems = activeItems;

  useEffect(() => {
    if (!itemName) {
      setSelectedItem(null);
      return;
    }

    const decodedName = decodeURIComponent(itemName);

    const foundItem = items.find((k) => k.name === decodedName);

    if (foundItem) {
      setSelectedItem(foundItem);
      setActiveTab(foundItem.type.toUpperCase());
    }
  }, [itemName]);

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();

    filteredItems = filteredItems.filter((item) => {
      if (
        item.name.toLowerCase().includes(query) ||
        item.libra?.effects.some((effect) =>
          effect.toLowerCase().includes(query),
        ) ||
        item.acquisition?.toLowerCase().includes(query)
      ) {
        return item.name.toLowerCase();
      }

      return false;
    });
  }

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
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="equip-grid">
        {filteredItems.map((item) => (
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

      <div
        className={`${selectedItem?.libra ? "expanded-info-box" : "karon-info-box"} ${selectedItem ? "visible" : ""}`}
      >
        {selectedItem && <ItemModal item={selectedItem} />}
      </div>
    </div>
  );
}
