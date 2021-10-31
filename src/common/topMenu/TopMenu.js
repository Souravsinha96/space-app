import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopMenu.css";
import Logo from "../../assets/shared/logo.svg";

function TopMenu() {
  const [open, setOpen] = useState(false);
  return (
    <header className="primary-header flex">
      <div>
        <img className="logo" src={Logo} alt="logo" />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className={open ? "mobile-nav-toggle active" : "mobile-nav-toggle"}
        aria-controls="primary-navigation"
      >
        <span className="sr-only" aria-expanded={open}>
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`${
            open ? `primary-navigation active` : `primary-navigation`
          } underline-indicators flex`}
        >
          <li className="active">
            <Link
              className="uppercase ff-sans-cond  text-white letter-spacing-2"
              to="/"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase ff-sans-cond text-white letter-spacing-2"
              to="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              className="uppercase ff-sans-cond text-white letter-spacing-2"
              to="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              className="uppercase ff-sans-cond text-white letter-spacing-2"
              to="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TopMenu;
