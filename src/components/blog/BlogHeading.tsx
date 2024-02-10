import * as React from "react"
import { Heading } from "@chakra-ui/react"

interface BlogHeadingInterface {
  children: React.ReactNode;
}

function BlogHeading({children}: BlogHeadingInterface) {
  return (
    <Heading as="h2" mt={2}>
      {children}
    </Heading>
  )
}

export default BlogHeading