import * as React from "react"
import { Text } from "@chakra-ui/react"

interface BlogTextInterface {
  children: React.ReactNode;
}

function BlogHeading({children}: BlogTextInterface) {
  return (
    <Text my={2} p={2}>
      {children}
  </Text>

  )
}

export default BlogHeading