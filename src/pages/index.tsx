import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfileSection from "../components/index/profile"
import { Container } from "@chakra-ui/react"
import "../styles/Home.module.css"

const IndexPage = () => (
  <Layout>
    <Container maxW="container.lg"  mt={["5", "10"]} mb={["5", "10"]}>
      <ProfileSection />
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" description={undefined} children={undefined}></Seo>

export default IndexPage
