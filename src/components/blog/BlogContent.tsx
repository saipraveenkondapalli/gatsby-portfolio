import * as React from "react"
import { Heading, Link } from "@chakra-ui/react"
import BlogList from "./BlogList"
import BlogListItem from "./BlogListItem"

export type BlogContentList = {
  title: string
  url: string
}

interface BlogContentProps {
  contentList: BlogContentList[]
}

function BlogContent({ contentList }: BlogContentProps) {
  return (
    <>
      <Heading as="h2">Content</Heading>
      <BlogList type={"unordered"}>
        {contentList.map((content, index) => (
          <BlogListItem key={index}>
            <Link color={"teal"} href={content.url}>{content.title}</Link>
          </BlogListItem>
        ))}
      </BlogList>
    </>
  )
}

export default BlogContent
