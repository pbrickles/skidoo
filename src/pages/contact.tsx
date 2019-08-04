import React from "react";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Img from "gatsby-image";
import FiftyFifty from "../components/Grid/FiftFifty";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/contact.scss";

interface ContactPageProps {
  data: any;
}

const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="52 Skidoo - Contact Details"
        keywords={[`gatsby`, `application`, `react`]}
        description="52 Skidoo are a three piece Harlem swing band that have turned back the clock to play a dazzling set of vintage American music."
        lang="en"
      />
      <div className="contact">
        <FiftyFifty className="contact__intro">
          <FiftyFifty side="left">
            <h1>Contact 52 Skidoo</h1>
            <p>Drop the band a line for bookings:</p>
            <p>
              <a href="mailto:henrybotham@aol.com">
                <FontAwesomeIcon icon={faEnvelope} className="contact__icon" />{" "}
                Email Henry at henrybotham@aol.com
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/52_skidoo/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="contact__icon" />{" "}
                52 Skidoo on Instagram
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/52skidoo/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} className="contact__icon" />{" "}
                52 Skidoo on Facebook
              </a>
            </p>
          </FiftyFifty>
          <FiftyFifty side="right">
            <Img fluid={data.contactOne.childImageSharp.fluid} />
          </FiftyFifty>
        </FiftyFifty>
      </div>
    </Layout>
  );
};

export const fluidImage = graphql`
  fragment fluidContactImage on File {
    childImageSharp {
      fluid(maxWidth: 960) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const contactPageQuery = graphql`
  query {
    contactOne: file(relativePath: { eq: "52SkidooAction.jpg" }) {
      ...fluidContactImage
    }
  }
`;

export default ContactPage;
