import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/Video/Video"

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi Henry!</h1>
      <Video id="mN8OJaTvqW0" />
    </Layout>
  )
}

export default IndexPage
