import { NavLink } from "react-router-dom";

const navLinks = ["Home", "Popular", "Battle"];

export const Nav = () => {
  return (
    <ul className="nav">
      {navLinks.map((navLink, index) => {
        return (
          <li key={index}>
            <NavLink end to={navLink === "Home" ? "/" : navLink.toLowerCase()}>
              {navLink}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
