import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Nav from "../Nav/Nav";
import { mainNav } from "./mainNav";

import "./SiteHeader.scss";

const SiteHeader: React.FC<{ siteTitle: string }> = props => {
  const logo = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" title={props.siteTitle}>
          <Img className="header__logo" fluid={logo.logo.childImageSharp.fluid} />
        </Link>
        <Nav items={mainNav} />
      </div>
    </header>
  );
};

export default SiteHeader;
