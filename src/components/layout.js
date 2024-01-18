/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import NavBar from "./header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
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
      <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>{children}</main>
      <footer>
      </footer>


    </>
  )
}

export default Layout
