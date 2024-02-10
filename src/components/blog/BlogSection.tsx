import * as React from "react"

interface BlogHeadingInterface {
  children: React.ReactNode
  id: string
}

function BlogHeading({children, id}: BlogHeadingInterface) {
  return (
    <section style={{marginTop:5}} id={id}>
      {children}
    </section>
  )
}

export default BlogHeading