import * as React from "react"
import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { siteConfig } from "../constant"

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
}

const Footer = () => {
  return (
    <Stack
      as="footer"
      direction={"row"}
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "90%", "90%"]}
      maxW="container.lg"
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Box textAlign="center">
          <Link
            href="/privacy-policy"> Privacy Policy</Link>
        </Box>
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.200")}
        >
          © {new Date().getFullYear()} Sai Praveen Kondapalli{" "}
        </Text>

        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              rel="noopener"
              isExternal
              aria-label={sc.name}
              href={sc.url}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>

      </Flex>
    </Stack>
  )
}

export default Footer
