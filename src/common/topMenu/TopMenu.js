import React from "react";
import { Link } from "react-router-dom";
import "./TopMenu.css";
import Logo from "../../assets/shared/logo.svg";
function TopMenu() {
  return (
    <header className="primary-header flex">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      {/* <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li className="active">
            <Link
              className="uppercase ff-sans-cond  text-white letter-spacing-2"
              to="/"
            >
              <span>01</span>Home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase ff-sans-cond text-white letter-spacing-2"
              to="/destination"
            >
              <span>02</span>Destination
            </Link>
          </li>
          <li>
            <Link
              className="uppercase ff-sans-cond text-white letter-spacing-2"
              to="/crew"
            >
              <span>03</span>Crew
            </Link>
          </li>
          <li>
            <Link
              className="uppercase ff-sans-cond text-white letter-spacing-2"
              to="/technology"
            >
              <span>04</span>Technology
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default TopMenu;
