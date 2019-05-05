/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = (props: { children: React.ReactNode}) => {
  const { children } = props;
  const { site } = useStaticQuery(
  graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
      <>
        <Header siteTitle={site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>52 Skidoo</footer>
        </div>
      </>
    )}

export default Layout;
