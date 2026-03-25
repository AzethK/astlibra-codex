import React from "react";
import weapons from "../data/weapons";

export default function EquipScreen() {
  return (
    <div className="equip-container">
      <div className="equip-grid">
        {weapons.map((weapon) => (
          <div key={weapon.name} className="equip-card">
            <img src={weapon.image} alt={weapon.name} />
            <h3>{weapon.name}</h3>
            <p className="equip-stat">
              ATK: {weapon.attack} Range: {weapon.range} Handling:{" "}
              {weapon.handling} Weight: {weapon.weight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
