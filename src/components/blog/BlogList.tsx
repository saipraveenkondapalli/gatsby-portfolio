import * as React from "react"
import { ListProps, OrderedList, UnorderedList } from "@chakra-ui/react"

interface BlogListProps {
  type: string
  children: React.ReactNode
  props?: ListProps
}

const BlogList: React.FC<BlogListProps> = ({ type, children, props }) => {
  if (type === "ordered") {
    return <OrderedList my={2} {...props}>{children}</OrderedList>
  } else {
    return <UnorderedList my={2} {...props}>{children}</UnorderedList>
  }
}


export default BlogList



