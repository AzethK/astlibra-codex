import React, { useState, useEffect } from "react";
import skills from "../data/skills";
import { useNavigate, useParams } from "react-router-dom";

export default function SkillScreen() {
  const { skillName } = useParams();
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
        {filteredItems.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            onClick={() => {
              navigate(`/skill/${skill.name}`);
            }}
          >
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
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
                <h3>{selectedSkill.name}</h3>
                <p>{selectedSkill.description}</p>
                {selectedSkill.acquisition && (
                  <p>
                    Acquisition: <span>{selectedSkill.acquisition}</span>
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
