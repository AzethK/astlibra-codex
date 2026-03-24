import React from "react";

export default function Sidebar({ active, setActive }) {
  const items = ["ITEM", "EQUIP", "SKILL", "GROW", "KARON"];

  const handleClick = (label) => {
    setActive((prev) => (prev === label ? null : label));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        {items.map((label) => (
          <button
            key={label}
            className={`sidebar-button ${active === label ? "active" : ""}`}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
