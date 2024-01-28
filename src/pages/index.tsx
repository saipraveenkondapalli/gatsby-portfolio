import * as React from "react"


import Seo from "../components/seo"
import ProfileSection from "../components/index/profile"
import { Container, Divider } from "@chakra-ui/react"
import "../styles/Home.module.css"
import TechStack from "../components/index/TechStack"
import { SideProjectSection } from "../components/index/Projects"
import WelcomeMessage from "../components/WelcomeMessage"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
      <WelcomeMessage />
      <ProfileSection />
      <Divider my={10} />
      <TechStack />
      <Divider my={10} />
      <SideProjectSection />
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" description={"I am a software engineer."} children={undefined}></Seo>

export default IndexPage
