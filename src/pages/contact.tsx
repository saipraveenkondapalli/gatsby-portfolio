import * as React from "react"
import { useState } from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SlideFade,
  Text,
  Textarea,
  useColorModeValue,
  useToast
} from "@chakra-ui/react"

import "../styles/Home.module.css"
import ErrorMessage from "../components/ErrorMessage"
import Layout from "../components/layout"


function Contact() {

  const toast = useToast()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch("https://saipraveen.me/api/email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      toast({
        title: "Message sent.",
        description: "We've received your message.",
        status: "success",
        duration: 9000,
        isClosable: true
      })
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Unable to send your message.",
        status: "error",
        duration: 9000,
        isClosable: true
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <main>
        <div>
          <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
            <SlideFade in offsetY={80}>
              <Flex width="full" align="center" justifyContent="center">
                <Box
                  p={8}
                  maxWidth="container.lg"
                  borderWidth={1}
                  borderRadius={8}
                  boxShadow="lg"
                >
                  <Heading size={"lg"}>
                    Let's get in touch. Leave me your message. 💬
                  </Heading>
                  <Text fontSize={"lg"} my={2}>
                    Do not hesitate to contact me!
                  </Text>
                  <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                      {error && <ErrorMessage message={error} />}
                      <FormControl isRequired>
                        <FormLabel key={"name"}>Name</FormLabel>
                        <Input
                          id="name"
                          name={"name"}
                          type={"text"}
                          value={name}
                          placeholder="Your Name"
                          size="lg"
                          onChange={(event) => setName(event.currentTarget.value)}
                          bg={useColorModeValue("gray.100", "gray.900")}
                        />
                      </FormControl>
                      <FormControl isRequired mt={6}>
                        <FormLabel key={"email"}>Email</FormLabel>
                        <Input
                          id="email"
                          name={"email"}
                          type={"email"}
                          value={email}
                          placeholder="Email"
                          size="lg"
                          onChange={(event) =>
                            setEmail(event.currentTarget.value)
                          }
                          bg={useColorModeValue("gray.100", "gray.900")}
                        />
                      </FormControl>
                      <FormControl isRequired mt={6}>
                        <FormLabel key={"message"}>Message</FormLabel>
                        <Textarea
                          id="message"
                          name={"message"}
                          value={message}
                          placeholder="Type your message..."
                          size="lg"
                          onChange={(event) =>
                            setMessage(event.currentTarget.value)
                          }
                          bg={useColorModeValue("gray.100", "gray.900")}
                        />
                      </FormControl>
                      <Button
                        variant="solid"
                        type="submit"
                        width="full"
                        // bg={useColorModeValue('gray.200', 'gray.900')}
                        mt={4}
                        isLoading={isLoading}
                        loadingText="Submitting"
                        colorScheme={"blue"}
                      >
                        Send Message
                      </Button>
                    </form>
                  </Box>
                </Box>
              </Flex>
            </SlideFade>
          </Container>
        </div>
      </main>

    </Layout>

  )
}

export default Contact