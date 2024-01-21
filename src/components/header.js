"use client"

import * as React from "react"
import { Link } from "gatsby"
import { Avatar, Box, Flex, HStack, IconButton, Link as CharkaLink, Stack, useColorModeValue } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { menuLinks } from "../constant"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const hoverBgColor = useColorModeValue("gray.200", "gray.900")
  const activeBgColor = useColorModeValue("gray.200", "gray.900")
  const activeColor = useColorModeValue("blue.500", "white")
  const inactiveColor = useColorModeValue("black", "white")

  const navItem = (
    <>
      {menuLinks.map((link) => {
        const isActive = typeof window != "undefined" && link.route === window.location.pathname
        return (
          <Link to={link.route} key={link.name}>
            <CharkaLink
              to={link.route}
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                bg: hoverBgColor,
                textDecoration: "none"
              }}
              bg={isActive ? activeBgColor : "none"}
              color={isActive ? activeColor : inactiveColor}
              onClick={isOpen ? onClose : onOpen}
              fontWeight="medium"
              textDecoration="none"
            >
              {link.name}
            </CharkaLink>
          </Link>
        )
      })}
    </>
  )

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={["95%", "95%", "95%"]}
          maxW={"container.lg"}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to={"/"}><Avatar
              as={CharkaLink}
              size="sm"

              src="https://saipraveen.me/assets/img/profile1.png"
              _hover={{ borderColor: "blue.500" }}
            /></Link>
            <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
              {navItem}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen && (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={"container.lg"}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
              {navItem}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  )
}

export default NavBar