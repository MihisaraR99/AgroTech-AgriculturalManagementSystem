import React from "react";
import { Link } from "react-router-dom";
import sprout from "./sprout.png";

function Header() {
  return (
    <nav className="navbar w-100 navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between">
      <div>
        <img
          src={sprout}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            borderBlockColor: "black",
            opacity: "70%",
          }}
        />
        <Link className="navbar-brand" to="/">
          AgroTech
        </Link>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              to="/"
            >
              Services
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/">
                All Services
              </Link>
              <Link className="dropdown-item" to="/">
                For Companies
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Event & Contact Support
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
