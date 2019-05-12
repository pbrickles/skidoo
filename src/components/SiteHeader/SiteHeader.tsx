import * as React from "react";
import { Link } from "gatsby";

import Nav from "../Nav/Nav";
import { mainNav } from "./mainNav";

import "./SiteHeader.scss";

const SiteHeader = (props: { siteTitle: string }) => (
  <header className="header">
    <div className="header__inner">
      <Link to="/" title={props.siteTitle}>
        <h1>{props.siteTitle}</h1>
      </Link>
      <Nav items={mainNav} />
    </div>
  </header>
);

export default SiteHeader;
