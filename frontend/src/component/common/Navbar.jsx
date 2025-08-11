import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ApiService from "../../service/ApiService";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(ApiService.isAuthenticated());
  const [role, setRole] = useState(ApiService.getRole()?.toUpperCase());

  const navigate = useNavigate();

  useEffect(() => {
    const updateAuth = () => {
      setIsAuthenticated(ApiService.isAuthenticated());
      setRole(ApiService.getRole()?.toUpperCase());
    };

    window.addEventListener("authChanged", updateAuth);

    // Initial load
    updateAuth();

    return () => {
      window.removeEventListener("authChanged", updateAuth);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      ApiService.logout();
      ApiService.notifyAuthChange(); // trigger the update
      setMenuOpen(false);
      navigate("/home");
    }
  };

  const isAdmin = role === "ADMIN";
  const isUser = role === "USER";
  const isAgent = role === "AGENT";

  const navLinkClass = ({ isActive }) =>
    `block px-1 py-2 rounded-md text-sm font-medium transition ${
      isActive ? "bg-blue-600 text-white" : "text-gray-900 hover:bg-blue-100"
    }`;

  const navItems = (
    <>
      <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
      <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
      <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
       <li><NavLink to="/world" className={navLinkClass}>Flat Show</NavLink></li>
      {!isAuthenticated && (
     <li><NavLink to="/PropertyDemo" className={navLinkClass}>Property Demo</NavLink></li>
      )}

      {isUser && (
        <>
         
          <li><NavLink to="/home" className={navLinkClass}>Search </NavLink></li>
          <li><NavLink to="/property" className={navLinkClass}>Property</NavLink></li>
        </>
      )}

      {isAgent && (
        <li><NavLink to="/list-property" className={navLinkClass}>List Property</NavLink></li>
      )}

      {(isUser || isAgent) && (
        <>
          {/* <li><NavLink to="/my-bookings" className={navLinkClass}>My Bookings</NavLink></li> */}
          {/* <li><NavLink to="/profile" className={navLinkClass}>Profile</NavLink></li> */}
        </>
      )}

      {isAdmin && (
        <li><NavLink to="/admin" className={navLinkClass}>Admin</NavLink></li>
      )}

      {!isAuthenticated && (
        <>
          <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
          <li><NavLink to="/register" className={navLinkClass}>Register</NavLink></li>
        </>
      )}

      {isAuthenticated && (
        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-blue-200 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">
            <NavLink to="/home">LandSpot</NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 items-center">{navItems}</ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 pb-4">
          <ul className="space-y-2">{navItems}</ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
