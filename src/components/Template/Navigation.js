import React from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import routes from "../../data/routes";

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <img
      src="https://pbs.twimg.com/profile_images/1027220658206306304/3DoFsMIs_400x400.jpg"
      alt=""
      width="40px"
      height="40px"
      style={{ marginTop: 0.5 + "em", marginLeft: 1.5 + "em" }}
    />

    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} to={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
