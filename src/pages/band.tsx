import * as React from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tabs from "../components/Tabs/Tabs";
import FiftyFifty from "../components/Grid/FiftFifty";

import { band as tabsContent } from "../content/band";

import "../styles/band.scss";
import Blockquote from "../components/Blockquote/blockquote";
interface BandPageProps {
  data: any;
}

const BandPage: React.FC<BandPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="52 Skidoo - The Band"
        keywords={[`gatsby`, `application`, `react`]}
        description="52 Skidoo are a three piece Harlem swing band that have turned back the clock to play a dazzling set of vintage American music."
        lang="en"
      />
      <div className="band__intro">
        <div className="band__intro-inner">
          <Img fluid={props.data.bandOne.childImageSharp.fluid} />
          <div className="band__intro-text">
            <p>
              52 Skidoo are an unlikely collection of drunks, gamblers, misfits
              and outlaws performing Harlem Swing, a music born out of the
              1920’s stride piano style made famous by James P. Johnson and Fats
              Waller.
            </p>
            <p>
              They formed after a chance meeting whilst looking for unfinished
              bottles of wine at a new year’s eve party in 1929. This led to a
              mass brawl, multiple arrests and ultimately the formation of the
              band.
            </p>
          </div>
        </div>
      </div>
      <Tabs content={tabsContent} />
      <FiftyFifty className="band__other">
        <FiftyFifty side="left">
          <p>
            Other Skidoo performers come and go from gig to gig and are chosen
            based upon sobriety, high speed driving skills, choice of hat and
            terms of probation. Many are never seen again.
          </p>

          <p>
            The band are happy to hire themselves out for any occasion as long
            as there is a free bar, chorus girls, a makeshift shooting range and
            somewhere to arm wrestle. They have an album of songs and music from
            the 20’s & 30’s available to purchase and perform their own shows as
            well as providing live music for ‘Cotton Club Burlesque’, a dance
            show featuring ‘The Bombshells’. You can find them at
            vintage/cabaret/speakeasy/1920’s events throughout the UK and
            beyond.
          </p>
        </FiftyFifty>
        <FiftyFifty side="right">
          <Img fluid={props.data.carChase.childImageSharp.fluid} />
        </FiftyFifty>
      </FiftyFifty>
      <div className="band__quote">
        <div className="band__quote-inner">
          <Blockquote
            quote="Mercy, that's a whole lotta' meat and potato, mama"
            cite="Fats Waller"
          />
        </div>
      </div>
    </Layout>
  );
};

export default BandPage;

export const fluidImage = graphql`
  fragment fluidBandImage on File {
    childImageSharp {
      fluid(maxWidth: 960) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    bandOne: file(relativePath: { eq: "52SkidooFaces.jpg" }) {
      ...fluidBandImage
    }
    carChase: file(relativePath: { eq: "52CarChase.jpg" }) {
      ...fluidBandImage
    }
  }
`;
