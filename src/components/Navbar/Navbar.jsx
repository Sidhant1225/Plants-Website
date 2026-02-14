import "./Navbar.css";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Left Logo */}
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Planto.</span>
        </div>

        {/* Center Links */}
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Plants Type</a>
          <a href="#">More</a>
          <a href="#">Contact</a>
        </nav>

        {/* Right Icons */}
        <div className="nav-icons">
          <FiSearch />
          <FiShoppingBag />
          <HiOutlineMenuAlt3 />
        </div>

      </div>
    </header>
  );
};

export default Navbar;