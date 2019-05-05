import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/Video/Video";

import "../styles/home.scss";

const IndexPage = () => {
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
      <Video id="mN8OJaTvqW0" className="home__video" />
    </Layout>
  );
};

export default IndexPage;
