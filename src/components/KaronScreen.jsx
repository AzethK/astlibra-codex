import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import karons from "../data/karons";

export default function KaronScreen() {
  const { karonName } = useParams();
  const navigate = useNavigate();
  const [selectedKaron, setSelectedKaron] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");
  const [altKarons, setAltKarons] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAlt = (karonName) => {
    setAltKarons((prev) => ({
      ...prev,
      [karonName]: !prev[karonName],
    }));
  };

  const activeItems =
    activeTab != "ALL" ?
      karons.filter((karon) => karon.mode.toUpperCase() === activeTab)
    : karons;

  const isAlt = selectedKaron && altKarons[selectedKaron.name];

  const displayDescription =
    isAlt && selectedKaron?.altDescription ?
      selectedKaron.altDescription
    : selectedKaron?.description;

  const displayName =
    isAlt && selectedKaron?.altName ?
      selectedKaron.altName
    : selectedKaron?.name;

  useEffect(() => {
    if (!karonName) {
      setSelectedKaron(null);
      return;
    }

    const decodedName = decodeURIComponent(karonName);

    const foundKaron = karons.find((k) => k.name === decodedName);

    if (foundKaron) {
      setSelectedKaron(foundKaron);
      setActiveTab(foundKaron.mode.toUpperCase());
    }
  }, [karonName]);

  let filteredItems = activeItems;

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();

    filteredItems = filteredItems.filter((karon) => {
      if (
        karon.name.toLowerCase().includes(query) ||
        (karon.acquisition &&
          typeof karon.acquisition === "string" &&
          karon.acquisition.toLowerCase().includes(query))
      ) {
        return karon.name.toLowerCase();
      }

      return false;
    });
  }

  return (
    <div className="equip-container">
      <div className="equip-tabs">
        {[
          "ALL",
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
              navigate("/karon");
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Karon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="karon-grid">
        {filteredItems.map((karon) => {
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
                    onClick={() => navigate(`/karon/${karon.name}`)}
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
        onClick={() => {
          setSelectedKaron(null);
          navigate(`/karon/`);
        }}
      />

      <div className={`karon-info-box ${selectedKaron ? "visible" : ""}`}>
        {selectedKaron && (
          <>
            <h3>{displayName}</h3>
            <p>{displayDescription}</p>
            <p>
              Acquisition:{" "}
              <span
                className={
                  selectedKaron.acquisition != "Starting Karon" ?
                    "acquisition"
                  : ""
                }
                onClick={() => {
                  selectedKaron.acquisition != "Starting Karon" ?
                    navigate(`/equip/${selectedKaron.acquisition}`)
                  : "";
                }}
              >
                {selectedKaron.acquisition}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
