import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavLink to="/snacks" className="nav-link">
            Snacks
          </NavLink>
          <NavLink to="/drinks" className="nav-link">
            Drinks
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
