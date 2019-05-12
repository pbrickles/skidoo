import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import Cta from "../Cta/Cta";
import Nav from "../Nav/Nav";
import { mainNav } from "../SiteHeader/mainNav";

import "./SiteFooter.scss";

const SiteFooter = () => {
  const jointIsJumpin = useStaticQuery(
    graphql`
      query {
        jointIsJumpin: file(relativePath: { eq: "JointIsJumpin.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h3>The Joint Is Jumpin'</h3>

        <div className="fifty-fifty">
          <div className="fifty-fifty__left">
            <Img fluid={jointIsJumpin.jointIsJumpin.childImageSharp.fluid} />
          </div>
          <div className="fifty-fifty__right">
            <p>52 Skidoo's Album</p>
            <p>
              <Cta
                to="https://52skidoo.bandcamp.com/"
                target="_blank"
                externalLink
              >
                Available on bandcamp >>>
              </Cta>
            </p>
          </div>
        </div>
        <Nav items={mainNav} />
      </div>
      <div className="copyright">
        <div className="copyright__inner">
          <p>&copy; {currentYear} 52 Skidoo</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

// export const pageQuery =
