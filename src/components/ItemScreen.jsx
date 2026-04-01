import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import items from "../data/items";

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
        {selectedItem && (
          <>
            <div className={`${selectedItem?.libra ? "item-wrapper" : ""}`}>
              <div>
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
              </div>
              {selectedItem.libra && (
                <div>
                  <h3>Libra</h3>
                  <div className="item-stats">
                    <div className="item-stat">
                      <div className="stat-line">
                        <span className="item-effect-label">Karma: </span>
                        <span className="item-effect-value">
                          {selectedItem.libra.karma}
                        </span>
                      </div>
                      {selectedItem.libra.effects.map((effect, index) => (
                        <div key={index} className="stat-line">
                          <span className="item-effect-label">Effect: </span>
                          <span
                            className={`item-effect-value ${
                              effect.includes("GOOD") ? "libra-good"
                              : effect.includes("EPIC") ? "libra-epic"
                              : "libra-normal"
                            }`}
                          >
                            {effect}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
