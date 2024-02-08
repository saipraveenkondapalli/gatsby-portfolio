import * as React from "react"
import { ListItem } from "@chakra-ui/react"

interface BlogListItemProps {
  children: React.ReactNode
  props?: any
}

const BlogListItem: React.FC<BlogListItemProps> = ({ children, props }) => {
  return <ListItem my={1} {...props}>{children}</ListItem>
}

export default BlogListItem
