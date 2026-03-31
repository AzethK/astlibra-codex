import React, { useState } from "react";
import items from "../data/items";

export default function LibraModal({ onSelectItem, onClose }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedEffect, setSelectedEffect] = useState("Display All");
  const [karmaSort, setKarmaSort] = useState("DEFAULT");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleKarmaSort = () => {
    setKarmaSort((prev) => {
      if (prev === "DEFAULT") return "ASC";
      if (prev === "ASC") return "DESC";
      return "DEFAULT";
    });
  };

  const cleanEffectName = (effect) => {
    return effect
      .replace(/^[A-Z]+:\s*/i, "") // remove "GOOD: " prefix
      .replace(/\s*\((GOOD|EPIC|BAD)\)/i, "") // remove "(GOOD)" suffix
      .trim();
  };

  const allEffects = [
    "Display All",
    ...new Set(
      items
        .filter((item) => item.libra)
        .flatMap((item) =>
          item.libra.effects.map((effect) => cleanEffectName(effect)),
        ),
    ),
  ];

  const baseItems = items.filter((item) => item.libra);

  const filteredItems =
    selectedEffect === "Display All" ? baseItems : (
      baseItems.filter((item) =>
        item.libra.effects.some((effect) =>
          cleanEffectName(effect)
            .toLowerCase()
            .includes(selectedEffect.toLowerCase()),
        ),
      )
    );

  let searchedItems = [...filteredItems];

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();

    searchedItems = searchedItems.filter((item) => {
      if (
        item.name.toLowerCase().includes(query) ||
        item.libra?.effects.some((effect) =>
          effect.toLowerCase().includes(query),
        )
      ) {
        return item.name.toLowerCase();
      }

      return false;
    });
  }

  let finalItems = [...searchedItems];

  if (karmaSort === "ASC") {
    finalItems.sort((a, b) => a.libra.karma - b.libra.karma);
  } else if (karmaSort === "DESC") {
    finalItems.sort((a, b) => b.libra.karma - a.libra.karma);
  }

  return (
    <>
      <div className="karon-overlay visible" onClick={onClose} />

      <div className="libra-modal" onClick={(e) => e.stopPropagation()}>
        <div className="libra-header">
          <h2>Choose Item</h2>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search Items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            className={`equip-tab ${karmaSort !== "DEFAULT" ? "active" : ""}`}
            onClick={toggleKarmaSort}
          >
            Karma{" "}
            {karmaSort === "ASC" ?
              "↑"
            : karmaSort === "DESC" ?
              "↓"
            : ""}
          </button>

          <div className="libra-filters">
            <select
              value={selectedEffect}
              onChange={(e) => {
                setSelectedEffect(e.target.value);
                setHoveredItem(null);
              }}
              className="libra-dropdown"
            >
              {allEffects.map((effect) => (
                <option key={effect} value={effect}>
                  {effect}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="libra-grid">
          {finalItems.map((item) => (
            <div
              key={item.name}
              className="equip-card"
              onClick={() => {
                if (hoveredItem?.name === item.name) {
                  onSelectItem(item);
                } else {
                  setHoveredItem(item);
                }
              }}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>

        {hoveredItem && (
          <div className="libra-preview">
            <div className="item-wrapper">
              <div>
                <div className="equip-image-container">
                  <img
                    src={hoveredItem.image}
                    alt={hoveredItem.name}
                    className="equip-image"
                  />
                </div>
                <h3>{hoveredItem.name}</h3>
                <p>{hoveredItem.description}</p>
              </div>

              <div>
                <h3>Libra</h3>

                <div className="item-stats">
                  <div className="stat-line">
                    <span className="item-effect-label">Karma: </span>
                    <span className="item-effect-value">
                      {hoveredItem.libra.karma}
                    </span>
                  </div>

                  {hoveredItem.libra.effects.map((effect, i) => (
                    <div key={i} className="stat-line">
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
          </div>
        )}
      </div>
    </>
  );
}
