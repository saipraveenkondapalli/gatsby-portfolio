import * as React from "react"
import { Link } from "@chakra-ui/react"

interface BlogLinkProps {
  children: React.ReactNode
  href: string
}

const BlogLink: React.FC<BlogLinkProps> = ({ children, href }) => {
  return <Link
    href={href}
    color={"teal"}
    isExternal
  >
    {children}
    </Link>
}


export default BlogLink