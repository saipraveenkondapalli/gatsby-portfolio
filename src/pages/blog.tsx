import * as React from "react"
//@ts-ignore
import FreeSSLImg from "../images/blog/free-ssl-azure/ssl.jpg"
//@ts-ignore
import DeployDjangoImg from "../images/blog/azure-vm/intro.jpg"
import BlogLayout from "../components/blog/BlogLayout"
import {
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react"
import { MotionBox } from "../utils/motion"
import Seo from "../components/seo"

function Blog() {
  const blogsContent = [
    {
      title: "Deploy Django Site on Azure, AWS, GCP Virtual Machine (VM)",
      logo: DeployDjangoImg,
      url: "/blog/deploy-django-on-azure-vm/",
    },
    {
      title:
        "Free SSL Certificate on Azure, AWS, GCP, Virtual Machine(VM) and VPS hosting websites",
      logo: FreeSSLImg,
      url: "/blog/free-ssl-certificate-on-azure-aws-gcp-vps-hosting/",
    },
  ]

  return (
    <>
      <BlogLayout>
        <Heading as={"h1"}>Blogs</Heading>

        {blogsContent.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            logo={blog.logo}
            url={blog.url}
          />
        ))}
      </BlogLayout>
    </>
  )
}

function BlogCard({ title, logo, url }) {
  return (
    <MotionBox whileHover={{ y: -5 }} p={5}>
      <LinkBox
        as="article"
        w="100%"
        p={5}
        my="10px"
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        _hover={{ borderColor: "blue.500" }}
      >
        <LinkOverlay href={url} rel="noopener">
          <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
            <Image src={logo} alt={title} width="200px" maxW="200px" />
            <Flex flexDirection="column" ml={[0, 5, 10]} mt={[5, 5, 0, 0]}>
              <Heading
                as="h2"
                fontSize="md"
                fontWeight="600"
                color={"blue.400"}
              >
                {title}
              </Heading>
            </Flex>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </MotionBox>
  )
}

export const Head = () => (
  <Seo
    title="Blogs"
    description="Blogs on Azure, AWS, GCP, Django, Python, React, JavaScript, and more."
  >
    <script type={"application/ld+json"}>
      {`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "itemListElement": [
    {
  "@type": "ListItem",
"position": 1,
"name": "Home",
"item": "https://saipraveen.me"
},
{
  "@type": "ListItem",
"position": 2,
"name": "Blogs",
"item": "https://saipraveen.me/blog"
}
]
}


        `}
    </script>
  </Seo>
)

export default Blog
