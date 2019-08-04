import React from "react";
import { graphql } from "gatsby";

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
            <p><a href="mailto:henrybotham@gmail.com">Email Henry at henrybotham@gmail.com</a></p>
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
