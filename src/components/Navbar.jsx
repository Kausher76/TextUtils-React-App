import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title = "TextUtils", about = "About TextUtils", mode, toggleMode }) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {about}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                onClick={toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label ${
                  mode === "dark" ? "text-light" : "text-dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {mode === "dark"
                  ? "Enable Light Mode"
                  : "Enable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Navbar;
