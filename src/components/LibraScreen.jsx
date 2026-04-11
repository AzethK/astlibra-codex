import React, { use, useState } from "react";
import LibraModal from "./LibraModal";

const LibraScreen = () => {
  const [activePan, setActivePan] = useState(null);
  const [enhancedPan, setEnhancedPan] = useState(Array(10).fill(null));
  const [panItems, setPanItems] = useState(Array(10).fill(null));
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const handlePanClick = (index) => {
    setActivePan(index);
    setModalOpen(true);
  };

  const assignItemToPan = (item) => {
    const newPans = [...panItems];
    newPans[activePan] = item;
    setPanItems(newPans);
    setModalOpen(false);
  };

  const removeItemFromPan = (index) => {
    const newPans = [...panItems];
    newPans[index] = null;
    setPanItems(newPans);
  };

  const getEffectPriority = (effect) => {
    if (effect.includes("GOOD")) return 2;
    if (effect.includes("EPIC")) return 1;
    if (effect.includes("★")) return 0;
    return 3;
  };

  const sortEffects = (effects) => {
    return [...effects].sort((a, b) => {
      return getEffectPriority(a) - getEffectPriority(b);
    });
  };

  // Map pan items to their respective sides and filter out nulls while keeping track of original indices
  const leftItems = panItems
    .slice(0, 5)
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item);

  const rightItems = panItems
    .slice(5, 10)
    .map((item, index) => ({ item, index: index + 5 })) // offset
    .filter(({ item }) => item);

  const getEffects = (items, enhancedPan) => {
    return items.flatMap(({ item, index }) => {
      const effects = item.libra?.effects || [];

      return effects.map((effect) => {
        if (
          enhancedPan[index] &&
          !effect.includes("(GOOD)") &&
          !effect.includes("(EPIC)")
        ) {
          return effect + " [★]";
        }
        return effect;
      });
    });
  };

  const getKarma = (items) => {
    return items.reduce((sum, { item }) => sum + (item.libra?.karma || 0), 0);
  };

  const leftEffects = sortEffects(getEffects(leftItems, enhancedPan));
  const rightEffects = sortEffects(getEffects(rightItems, enhancedPan));

  const leftPans = [
    { top: 50, left: 7 },
    { top: 50, left: 14 },
    { top: 50, left: 21 },
    { top: 50, left: 28 },
    { top: 50, left: 35 },
  ];

  const rightPans = [
    { top: 50, left: 64 },
    { top: 50, left: 71 },
    { top: 50, left: 78 },
    { top: 50, left: 85 },
    { top: 50, left: 92 },
  ];

  // Build a frequency map of effects for each side to identify duplicates
  const buildEffectMap = (effects) => {
    const map = {};
    effects.forEach((effect) => {
      map[effect] = (map[effect] || 0) + 1;
    });
    return map;
  };

  const leftMap = buildEffectMap(leftEffects);
  const rightMap = buildEffectMap(rightEffects);

  const getEffectClass = (effect, index, effects) => {
    const isGood = effect.includes("GOOD");
    const isEpic = effect.includes("EPIC");
    const isStar = effect.includes("★");

    const baseClass =
      isGood ? "libra-good"
      : isEpic ? "libra-epic"
      : isStar ? "libra-star"
      : "libra-normal";

    // Count occurrences BEFORE this index (same box)
    const previousCount = effects
      .slice(0, index)
      .filter((e) => e === effect).length;

    const isDuplicateInSameBox = previousCount > 0;
    const isCrossDuplicate = crossDupes.has(effect);

    if (isDuplicateInSameBox || isCrossDuplicate) {
      return `${baseClass} libra-dupe`;
    }

    return baseClass;
  };

  const crossDupes = new Set(
    Object.keys(leftMap).filter((effect) => rightMap[effect]),
  );

  const getBalance = (leftKarma, rightKarma) => {
    const diff = Math.abs(leftKarma - rightKarma);

    // cap at 10 steps max
    const cappedDiff = Math.min(diff, 10);

    const value = 100 - cappedDiff * 10;

    let side = "center";
    if (leftKarma > rightKarma) side = "left";
    if (rightKarma > leftKarma) side = "right";

    return { value, side, stepsFromCenter: cappedDiff };
  };

  const steps = Array.from({ length: 21 });

  const { value, side, stepsFromCenter } = getBalance(
    getKarma(leftItems),
    getKarma(rightItems),
  );

  const activeIndex =
    side === "center" ? 10
    : side === "left" ? 10 - stepsFromCenter
    : 10 + stepsFromCenter;

  return (
    <div className="libra-container">
      <div className="title">Libra</div>
      <h4 style={{ textAlign: "center" }}>
        {isMobile ?
          <>
            Tap buttons to assign items, long tap to remove.
            <br />
            Tap buttons under pans to toggle enhancement.
          </>
        : <>
            Left-click buttons to assign items, right-click to remove.
            <br />
            Click buttons under pans to toggle enhancement.
          </>
        }
      </h4>
      <div className="balance-container">
        <div className="balance-ruler">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`ruler-step ${index === activeIndex ? "active" : ""}`}
            >
              |
            </div>
          ))}

          <div
            className="ruler-indicator-wrapper"
            style={{ left: `${(activeIndex / 20) * 100}%` }}
          >
            <div className="ruler-value">{value}</div>
            <div className="ruler-indicator"></div>
          </div>
        </div>

        <div className="ruler-labels">
          <span style={{ left: "0%" }}>0</span>
          <span style={{ left: "25%" }}>50</span>
          <span style={{ left: "50%" }}>100</span>
          <span style={{ left: "75%" }}>50</span>
          <span style={{ left: "100%" }}>0</span>
        </div>
      </div>
      <div className="libra-layout">
        {/* LEFT BOX */}
        <div className="effects-box left-box">
          {isMobile && <h3>Left Pans</h3>}
          <h3>Karma: {getKarma(leftItems)}</h3>
          {leftEffects.map((effect, index) => (
            <div
              key={index}
              className={`item-effect-value ${getEffectClass(
                effect,
                index,
                leftEffects,
              )}`}
            >
              {effect}
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="image-wrapper">
          <img
            src={import.meta.env.BASE_URL + "assets/misc/scales.png"}
            alt="Scales"
            className="libra-image"
          />

          {[...leftPans, ...rightPans].map((pos, index) => (
            <div
              key={index}
              className="pan-card-wrapper"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
              }}
            >
              {panItems[index] && (
                <span className="pan-label">
                  {panItems[index].libra?.karma || 0}
                </span>
              )}
              <button
                className="pan pan-enhance-label"
                onClick={() => {
                  setEnhancedPan((prev) => {
                    const newArr = [...prev];
                    newArr[index] = !newArr[index];
                    return newArr;
                  });
                }}
              >
                {enhancedPan[index] ? "★" : ""}
              </button>

              <button
                className="pan pan-card"
                onClick={() => handlePanClick(index)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  removeItemFromPan(index);
                }}
              >
                {panItems[index] && <img src={panItems[index].image} />}
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT BOX */}
        <div className="effects-box right-box">
          {isMobile && <h3>Right Pans</h3>}
          <h3>Karma: {getKarma(rightItems)}</h3>
          {rightEffects.map((effect, index) => (
            <div
              key={index}
              className={`item-effect-value ${getEffectClass(
                effect,
                index,
                rightEffects,
              )}`}
            >
              {effect}
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <LibraModal
          onSelectItem={assignItemToPan}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default LibraScreen;
