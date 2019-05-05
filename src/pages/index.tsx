import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/Video/Video";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        description="52 Skidoo are a three piece Harlem swing band that have turned back the clock to play a dazzling set of vintage American music."
        lang="en"
      />
      <h1>Hi Henry!</h1>
      <Video id="mN8OJaTvqW0" />
    </Layout>
  );
};

export default IndexPage;
