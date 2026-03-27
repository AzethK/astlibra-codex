import React, { useState } from "react";
import karons from "../data/karons";

export default function KaronScreen() {
  const [selectedKaron, setSelectedKaron] = useState(null);
  const [activeTab, setActiveTab] = useState("BASIC");
  const [altKarons, setAltKarons] = useState({});

  const toggleAlt = (karonName) => {
    setAltKarons((prev) => ({
      ...prev,
      [karonName]: !prev[karonName],
    }));
  };

  const isAlt = selectedKaron && altKarons[selectedKaron.name];

  const displayDescription =
    isAlt && selectedKaron?.altDescription ?
      selectedKaron.altDescription
    : selectedKaron?.description;

  const displayName =
    isAlt && selectedKaron?.altName ?
      selectedKaron.altName
    : selectedKaron?.name;

  return (
    <div className="equip-container">
      <div className="equip-tabs">
        {[
          "BASIC",
          "EXPLORATORY",
          "WEAPONS",
          "DEFENSIVE",
          "POSSESSION SKILL",
          "ATTRIBUTES/STATUS",
          "ALTERED TECHNIQUE",
          "SPECIAL",
        ].map((tab) => (
          <button
            key={tab}
            className={`equip-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedKaron(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="karon-grid">
        {karons
          .filter((karon) => karon.mode.toUpperCase() === activeTab)
          .map((karon) => {
            const isAlt = altKarons[karon.name];

            const displayName =
              isAlt && karon.altName ? karon.altName : karon.name;

            return (
              <div key={karon.name} className="karon-item">
                {/* Card + alt button in vertical stack */}
                <div className="karon-main">
                  <div className="karon-card-wrapper">
                    <div
                      className={`karon-card 
          ${selectedKaron?.name === karon.name ? "selected" : ""} 
          ${isAlt ? "alt" : ""}
        `}
                      onClick={() => setSelectedKaron(karon)}
                    >
                      <h3>{displayName}</h3>
                    </div>

                    {karon.altName && (
                      <button
                        className={`alt-toggle ${isAlt ? "active" : ""}`}
                        onClick={() => toggleAlt(karon.name)}
                      >
                        Alt
                      </button>
                    )}

                    {!karon.altName && (
                      <button className="alt-toggle placeholder" />
                    )}
                  </div>
                </div>

                {/* Crystals aligned with the card only */}
                <div className="crystal-container">
                  {Array.from({ length: karon.cost }).map((_, i) => (
                    <img
                      key={i}
                      src={`${import.meta.env.BASE_URL}assets/misc/magic_crystal.png`}
                      className={`crystal ${i % 2 === 0 ? "even" : "odd"}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      <div
        className={`karon-overlay ${selectedKaron ? "visible" : ""}`}
        onClick={() => setSelectedKaron(null)}
      />

      <div className={`karon-info-box ${selectedKaron ? "visible" : ""}`}>
        {selectedKaron && (
          <>
            <h3>{displayName}</h3>
            <p>{displayDescription}</p>
            <p className="acquisition">
              Acquisition: {selectedKaron.acquisition}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
