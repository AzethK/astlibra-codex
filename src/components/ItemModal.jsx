export default function ItemModal({ item }) {
  return (
    <div className={`${item?.libra ? "item-wrapper" : ""}`}>
      <div>
        <div className="equip-image-container">
          <img src={item.image} alt={item.name} className="equip-image" />
        </div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {item.acquisition && (
          <p>
            Acquisition: <span>{item.acquisition}</span>
          </p>
        )}
      </div>
      {item.libra && (
        <div>
          <h3>Libra</h3>
          <div className="item-stats">
            <div className="stat-line">
              <span className="item-effect-label">Karma: </span>
              <span className="item-effect-value">{item.libra.karma}</span>
            </div>
            {item.libra.effects.map((effect, index) => (
              <div key={index} className="stat-line">
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
      )}
    </div>
  );
}
