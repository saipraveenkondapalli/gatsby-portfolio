import Prism from "prismjs"
import "prismjs/themes/prism.css"
import * as React from "react"
import { useEffect } from "react"

import "../../styles/blog.css"
import Layout from "../Layout"
import { Container } from "@chakra-ui/react"

function BlogLayout({ children }) {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout>
      <Container maxW="container.md" mt={["5", "10"]} mb={["5", "10"]}>
        {children}
      </Container>
    </Layout>
  )
}

export default BlogLayout
