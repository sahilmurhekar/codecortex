import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hamburger.css";
import { Link } from "react-router-dom";
export default function HamburgerMenu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function handleHomeNavigate() {
    navigate("/");
    window.scroll(0, 0);
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="background">
        <button
          className={`menu__icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isOpen && (
        <div className="menu">
          {/* You can add your menu content here */}
          <ul>
            <Link to="/">
              <li
                key="home"
                className="mb-2 last:mb-0 hover:bg-gray-600 rounded-md p-2 cursor-pointer"
                onClick={() => {
                  handleHomeNavigate();
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </li>
            </Link>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="mb-2 last:mb-0 hover:bg-gray-600 rounded-md p-2 cursor-pointer"
                onClick={() => {
                  handleHomeNavigate();
                  setTimeout(() => {
                    item.onClick();
                    setIsOpen(!isOpen);
                  }, 200);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
