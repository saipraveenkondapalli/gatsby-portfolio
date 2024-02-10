import * as  React from "react"
import { Image } from "@chakra-ui/react"

interface BlogImageInterface {
  src: string;
  alt: string;
}


function BlogImage({src, alt}:BlogImageInterface) {
  return (
    <>
      <Image my={3} src={src} alt={alt} />
    </>
  )
}

export default BlogImage