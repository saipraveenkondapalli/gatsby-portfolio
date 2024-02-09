import Prism from "prismjs"
import "prismjs/themes/prism.css"
import * as React from "react"
import { useEffect, useState } from "react"
import { Container, IconButton, Tooltip } from "@chakra-ui/react"
import { ChevronUpIcon } from "@chakra-ui/icons"

import "../../styles/blog.css"
import Layout from "../Layout"

function BlogLayout({ children }) {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  })

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollToTop && window.pageYOffset > 400) {
        setShowScrollToTop(true)
      } else if (showScrollToTop && window.pageYOffset <= 400) {
        setShowScrollToTop(false)
      }
    }
    window.addEventListener("scroll", checkScrollTop)
    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [showScrollToTop])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Layout>
      <Container maxW="container.md" mt={["5", "10"]} mb={["5", "10"]}>
        {children}
        {showScrollToTop && (
          <Tooltip label="Scroll to top" aria-label="Scroll to top">
            <IconButton
              backgroundColor={"black"}
              size={"lg"}
              onClick={scrollToTop}
              icon={<ChevronUpIcon color={"white"} fontSize={"4xl"} />}
              position="fixed"
              bottom="1rem"
              right="1rem"
              aria-label={"Scroll to top"}
              _hover={{ backgroundColor: "gray" }}
            />
          </Tooltip>
        )}
      </Container>
    </Layout>
  )
}

export default BlogLayout
