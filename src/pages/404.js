import * as React from "react"
import { Box, Button, Container, Heading, Link } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Seo from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <Container maxW="container.lg" p={5} centerContent>
      <Box textAlign="center" mt={5}>
        <Heading>404: Page Not Found</Heading>
        <Link href={"/"}> <Button colorScheme="teal"  mt={5}>Go back to Home</Button></Link>
      </Box>
    </Container>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage