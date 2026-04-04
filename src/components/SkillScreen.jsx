import React, { useState, useEffect } from "react";
import skills from "../data/skills";
import { useNavigate, useParams } from "react-router-dom";

export default function SkillScreen() {
  const { skillName } = useParams();
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [altSkills, setAltSkills] = useState({});

  const toggleAlt = (skillName) => {
    setAltSkills((prev) => ({
      ...prev,
      [skillName]: !prev[skillName],
    }));
  };

  let filteredItems = skills;

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();

    filteredItems = filteredItems.filter((skill) => {
      if (skill.name.toLowerCase().includes(query)) {
        return skill.name.toLowerCase();
      }

      return false;
    });
  }

  useEffect(() => {
    if (!skillName) {
      setSelectedSkill(null);
      return;
    }

    const decodedName = decodeURIComponent(skillName);

    const foundSkill = skills.find((s) => s.name === decodedName);

    if (foundSkill) {
      setSelectedSkill(foundSkill);
    }
  }, [skillName]);

  const isAlt = selectedSkill && altSkills[selectedSkill.name];

  const displayDescription =
    isAlt && selectedSkill?.altDescription ?
      selectedSkill.altDescription
    : selectedSkill?.description;

  const displayName =
    isAlt && selectedSkill?.altName ?
      selectedSkill.altName
    : selectedSkill?.name;

  const displaySt =
    isAlt && selectedSkill?.altSt ? selectedSkill.altSt : selectedSkill?.st;

  return (
    <div className="equip-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="equip-grid">
        {filteredItems.map((skill) => {
          const isAlt = altSkills[skill.name];

          const displayName =
            isAlt && skill.altName ? skill.altName : skill.name;

          return (
            <div className="karon-card-wrapper" key={skill.name}>
              <div
                className={`skill-card 
          ${selectedSkill?.name === skill.name ? "selected" : ""} 
          ${isAlt ? "alt" : ""}
        `}
                onClick={() => {
                  navigate(`/skill/${skill.name}`);
                }}
              >
                <img src={skill.image} alt={skill.name} />
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    justifyContent: "center",
                  }}
                >
                  <img src={skill.element} alt="Element" /> {displayName}
                </h3>
              </div>

              {skill.altName && (
                <button
                  className={`alt-toggle ${isAlt ? "active" : ""}`}
                  onClick={() => toggleAlt(skill.name)}
                >
                  Alt
                </button>
              )}

              {!skill.altName && <button className="alt-toggle placeholder" />}
            </div>
          );
        })}
      </div>
      <div
        className={`karon-overlay ${selectedSkill ? "visible" : ""}`}
        onClick={() => {
          setSelectedSkill(null);
          navigate(`/skill/`);
        }}
      />

      <div
        className={`${selectedSkill?.libra ? "expanded-info-box" : "karon-info-box"} ${selectedSkill ? "visible" : ""}`}
      >
        {selectedSkill && (
          <>
            <div className={`${selectedSkill?.libra ? "item-wrapper" : ""}`}>
              <div>
                <div className="equip-image-container">
                  <img
                    src={selectedSkill.image}
                    alt={selectedSkill.name}
                    className="skill-image"
                  />
                </div>
                <h3>{displayName}</h3>
                <p>{displayDescription}</p>
                <p>
                  <strong>ST Cost: </strong>
                  {displaySt}
                </p>
                {selectedSkill.acquisition && (
                  <p>
                    <strong>Acquisition: </strong>
                    <span>{selectedSkill.acquisition}</span>
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
