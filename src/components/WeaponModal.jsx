import React from "react";

export default function WeaponModal({ weapon, onClose }) {
  const renderBars = (value, type) => {
    return [1, 2, 3].map((i) => (
      <div
        key={i}
        className={`stat-bar ${type} ${i <= value ? `filled-${i}` : ""}`}
      />
    ));
  };

  return (
    <div className="weapon-overlay" onClick={onClose}>
      <div className="weapon-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="weapon-title">{weapon.name}</h2>

        <div className="weapon-divider" />

        <p className="weapon-description">{weapon.description}</p>

        <div className="weapon-main">
          <img src={weapon.image} alt={weapon.name} className="weapon-image" />
          <div>
            <div className="weapon-stats">
              <div className="stat-line">
                <span className="stat-label">Attack Power:</span>
                <span className="stat-value">{weapon.attack}</span>
              </div>

              <div className="stat-line">
                <span className="stat-label">Range:</span>
                <div className="stat-bars">
                  {renderBars(weapon.range, "range")}
                </div>
              </div>

              <div className="stat-line">
                <span className="stat-label">Handling:</span>
                <div className="stat-bars">
                  {renderBars(weapon.handling, "handling")}
                </div>
              </div>

              <div className="stat-line">
                <span className="stat-label">Weight:</span>
                <span className="stat-value">{weapon.weight}</span>
              </div>
            </div>

            <div className="weapon-extra">
              <p>
                <strong>Skill:</strong>{" "}
                <span className="weapon-skill">{weapon.skill}</span>
              </p>
              <p>
                <strong>Acquisition:</strong> {weapon.acquisition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
