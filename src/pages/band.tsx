import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../styles/band.scss";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="52 Skidoo - The Band"
        keywords={[`gatsby`, `application`, `react`]}
        description="52 Skidoo are a three piece Harlem swing band that have turned back the clock to play a dazzling set of vintage American music."
        lang="en"
      />
      
    </Layout>
  );
};

export default IndexPage;
