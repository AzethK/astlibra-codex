import React from "react";
import { useNavigate } from "react-router-dom";

export default function EquipModal({ equip, onClose, closing, tab }) {
  const navigate = useNavigate();
  const renderBars = (value, type) => {
    return [1, 2, 3].map((i) => (
      <div
        key={i}
        className={`stat-bar ${type} ${i <= value ? `filled-${i}` : ""}`}
      />
    ));
  };

  const formatStatLabel = (key) => {
    const map = {
      attack: "Attack Power",
      defense: "Defense Power",
      luck: "Luck",
      agility: "Agility",
      adaptability: "Adaptability",
      guard: "Guard",
      maxhp: "Max HP",
      maxst: "Max ST",
      magical_power: "Magical Power",
      parares: "Paralysis Resistance",
      petrires: "Petrifaction Resistance",
      bleedres: "Bleeding Resistance",
      blindres: "Blind Resistance",
      poisonres: "Poison Resistance",
      effect: "Effect",
    };

    return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  const trinketStats =
    tab === "TRINKETS" && equip.stats ? Object.entries(equip.stats) : [];

  return (
    <div
      className={`equip-overlay ${closing ? "closing" : ""}`}
      onClick={onClose}
    >
      <div
        className={`equip-modal ${closing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="equip-title">{equip.name}</h2>

        <div className="equip-divider" />

        <p className="equip-description">{equip.description}</p>

        <div className="equip-main">
          <div className="equip-image-container">
            <img src={equip.image} alt={equip.name} className="equip-image" />
          </div>
          <div>
            <div className="equip-stats">
              {tab === "TRINKETS" ?
                trinketStats.map(([key, value], index) => (
                  <div className="stat-line" key={index}>
                    <span className="stat-label">{formatStatLabel(key)}:</span>

                    {typeof value === "number" ?
                      <span
                        className={`stat-value ${
                          typeof value === "string" ?
                            value.startsWith("No") ?
                              "stat-negative"
                            : "stat-effect"
                          : value < 0 ? "stat-negative"
                          : ""
                        }`}
                      >
                        {value}
                      </span>
                    : <span
                        className={`stat-value ${
                          typeof value === "string" ?
                            value.startsWith("No") ?
                              "stat-negative"
                            : "stat-effect"
                          : value < 0 ? "stat-negative"
                          : ""
                        }`}
                      >
                        {value}
                      </span>
                    }
                  </div>
                ))
              : <>
                  {/* FIRST EQUIP STAT */}
                  <div className="stat-line">
                    <span className="stat-label">
                      {tab === "WEAPONS" ? "Attack Power:" : "Defense Power:"}
                    </span>
                    <span className="stat-value">
                      {tab === "WEAPONS" ? equip.attack : equip.defense}
                    </span>
                  </div>
                  {/* SECOND EQUIP STAT */}
                  <div className="stat-line">
                    <span className="stat-label">
                      {tab === "WEAPONS" ?
                        "Range:"
                      : tab === "SHIELDS" ?
                        "Guard:"
                      : "Max HP:"}
                    </span>
                    {tab === "WEAPONS" ?
                      <div className="stat-bars">
                        {renderBars(equip.range, "range")}
                      </div>
                    : <span className="stat-value">
                        {tab === "SHIELDS" ? equip.guard : equip.maxhp}
                      </span>
                    }
                  </div>
                  {/* THIRD EQUIP STAT */}
                  <div className="stat-line">
                    <span className="stat-label">
                      {tab === "WEAPONS" ?
                        "Handling:"
                      : tab === "SHIELDS" ?
                        "Weight:"
                      : "Max ST:"}
                    </span>
                    {tab === "WEAPONS" ?
                      <div className="stat-bars">
                        {renderBars(equip.handling, "handling")}
                      </div>
                    : <span className="stat-value">
                        {tab === "SHIELDS" ? equip.weight : equip.maxst}
                      </span>
                    }
                  </div>
                  {/* FOURTH EQUIP STAT */}
                  <div className="stat-line">
                    <span className="stat-label">
                      {tab === "WEAPONS" ?
                        "Weight:"
                      : tab === "SHIELDS" ?
                        "Full Resistance:"
                      : "Magical Power:"}
                    </span>
                    <span className="stat-value">
                      {tab === "WEAPONS" ?
                        equip.weight
                      : tab === "SHIELDS" ?
                        equip.full_resistance
                      : equip.magical_power}
                    </span>
                  </div>{" "}
                </>
              }
            </div>

            {tab === "WEAPONS" && (
              <div className="equip-extra">
                <p>
                  <strong>Karon:</strong>{" "}
                  <span
                    className="equip-skill"
                    onClick={() => {
                      navigate(`/karon/${equip.skill}`);
                    }}
                  >
                    {equip.skill}
                  </span>
                </p>
                <p>
                  <strong>Acquisition:</strong> {equip.acquisition}
                </p>
              </div>
            )}
          </div>
        </div>
        {tab != "WEAPONS" && (
          <div className="equip-extra">
            {tab != "TRINKETS" && (
              <p>
                <strong>Karon:</strong>{" "}
                <span
                  className="equip-skill"
                  onClick={() => {
                    navigate(`/karon/${equip.skill}`);
                  }}
                >
                  {equip.skill}
                </span>
              </p>
            )}
            <p>
              <strong>Acquisition:</strong> {equip.acquisition}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
