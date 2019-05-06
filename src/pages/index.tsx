import React from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/Video/Video";

import "../styles/home.scss";
import SoundCloud from "../components/SoundCloud/SoundCloud";

interface IndexPageProps {
  data: any;
}

const IndexPage = (props: IndexPageProps) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        description="52 Skidoo are a three piece Harlem swing band that have turned back the clock to play a dazzling set of vintage American music."
        lang="en"
      />
      <p className="home__intro">
        Bringing back to life the forgotten era of the Speakeasy, Prohibition,
        Vaudeville, Tin Pan Alley, New York Rent Parties, Harlem Stride Piano
        and Hot Jazz...
      </p>
      <div className="home__video">
        <Video id="mN8OJaTvqW0" className="home__video-embed" />
      </div>

      <div className="home__description fifty-fifty">
        <div className="fifty-fifty__left">
          <h2>52 Skid-who?</h2>
          <p>
            52 Skidoo are a three piece Harlem swing band that have turned back
            the clock to play a dazzling set of vintage American music.
          </p>

          <p>
            Classic favourites like ‘Ain’t Misbehavin‘, ‘The Joint is Jumpin’
            and ‘Your Feet’s Too Big’ are carefully woven into well known hits
            like ‘Jeepers Creepers’ , ‘Darktown Strutters Ball’ and ‘I Ain’t Got
            Nobody’ to create an authentic 1920/30’s Harlem party atmosphere.
          </p>
        </div>
        <div className="fifty-fifty__right">
          <Img fluid={props.data.homeOne.childImageSharp.fluid} />
        </div>
      </div>
      <div className="home__soundcloud">
        <SoundCloud />
      </div>
      <div className="home__image-container">
        <Img fluid={props.data.homeTwo.childImageSharp.fluid} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 960) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    homeOne: file(relativePath: { eq: "52SkidooHome.jpg" }) {
      ...fluidImage
    }
    homeTwo: file(relativePath: { eq: "52SkidooHomeLarge.jpg" }) {
      ...fluidImage
    }
  }
`;
