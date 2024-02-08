import * as React from "react"
import { Flex, Text } from "@chakra-ui/react"

interface LastUpdatedProps {
  dateTime: string;
}

const BlogLastUpdated: React.FC<LastUpdatedProps> = ({ dateTime }) => {
  return (
    <Flex mt={5}>
      <Text>
        Last updated on{" "}
        <time
          aria-label={"Article review date"}
          dateTime={dateTime}
        >
          {new Date(dateTime).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
      </Text>
    </Flex>
  )
}

export default BlogLastUpdated