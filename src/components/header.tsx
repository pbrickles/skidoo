import { Link } from "gatsby";
import * as React from "react";

const Header = (props: { siteTitle: string }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>{props.siteTitle}</h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Home
      </Link>
      <Link
        to="/band"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Band
      </Link>
    </div>
  </header>
);

export default Header;
