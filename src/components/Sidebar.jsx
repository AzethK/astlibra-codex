import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const items = ["ITEM", "EQUIP", "SKILL", "GROW", "KARON"];
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (label) => {
    const path = label.toLowerCase();
    const current = location.pathname;

    if (current === `/${path}`) {
      navigate("/");
    } else {
      navigate(`/${path}`);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        {items.map((label) => {
          const path = `/${label.toLowerCase()}`;
          const isActive = location.pathname.startsWith(path);

          return (
            <button
              key={label}
              className={`sidebar-button ${isActive ? "active" : ""}`}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
