import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar({ open }) {
  const items = ["ITEM", "EQUIP", "SKILL", "KARON", "LIBRA"];
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    open = true;
  }

  //  Clicking an active button will navigate to home, clicking an inactive button will navigate to that page
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
    <div className={`sidebar ${open ? "open" : ""}`}>
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
