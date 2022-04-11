import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <NavLink to="/home" target="_self" activeclassname="active">Home</NavLink>
        <NavLink to="/about" target="_self">About</NavLink>
        <NavLink to="/contact" target="_self">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
