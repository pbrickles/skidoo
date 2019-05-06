import * as React from "react";
import { Link } from "gatsby";

import { NavProps } from "./Interfaces/props";
import { NavItem } from "../SiteHeader/Interfaces/NavItems";

import "./Nav.scss";

const Nav = (props: NavProps) => {
  return (
    <ul className="nav__list">
      {props.items.map((item: NavItem, i: number) => (
        <li className="nav__item" key={`nav_${i}`}>
          <Link
            to={item.path}
            activeClassName="nav__item--active"
            title={item.title}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
