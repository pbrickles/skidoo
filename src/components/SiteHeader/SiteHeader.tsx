import * as React from "react";

import Nav from "../Nav/Nav";
import { mainNav } from "./mainNav";

import "./SiteHeader.scss";

const SiteHeader = (props: { siteTitle: string }) => (
  <header className="header">
    <div className="header__inner">
      <h1>{props.siteTitle}</h1>
      <Nav items={mainNav} />
    </div>
  </header>
);

export default SiteHeader;
