import * as React from "react"
import { Box, Center, Image, LinkBox, Stack, Tag, Text, useColorModeValue, Circle } from "@chakra-ui/react"
import { MotionBox } from "../utils/motion"
import { Project } from "../types/project"
import { programmingLanguages, otherTechStacks } from "../constant"

interface ISideProjectCard {
  project: Project;
}

export const SideProjectCard: React.FC<ISideProjectCard> = ({ project }) => {
  const allTechStacks = [...programmingLanguages, ...otherTechStacks];

  return (
    <MotionBox whileHover={{ y: -5 }}>
      <Center py={6}>
        <LinkBox
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          px={6}
          py={3}
          mx={5}
          overflow={"hidden"}
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            project.link && window.open(project.link)
          }}
        >
          <Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
            <Image
              src={project.imageUrl}
              objectFit={"cover"}
              maxH={"210px"}
              h={"210px"}
              w="full"
                alt={project.alt} />
          </Box>
          <Stack mb={3}>
            <Text
              mt={3}
              color={"blue.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"lg"}
              letterSpacing={1.1}
            >
              {project?.name}
            </Text>
            <Text color={"gray.500"}>{project?.summary}</Text>
          </Stack>
          {project.tech.map((tech, index) => {
            const techStack = allTechStacks.find(stack => stack.name === tech);
            return (
              <Tag size="sm" padding="10px" key={index} mb={2} mx={1}>
                {techStack ? <Circle size="30px">{techStack.icon}</Circle> : tech}
              </Tag>
            );
          })}
        </LinkBox>
      </Center>
    </MotionBox>
  )
}