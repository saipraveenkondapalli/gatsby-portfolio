import * as React from "react"
import { Flex, Heading, Image, LinkBox, LinkOverlay, Stack, Text, useColorModeValue } from "@chakra-ui/react"

interface IAchievementCard {
  achievement: {
    name: string;
    competition: string;
    Organisation: string;
    date: string;
    link: string;
    description: string;
    logo: string;
  },
  colorMode: string;
}

const AchievementCard: React.FC<IAchievementCard> = ({ achievement, colorMode }) => {
  return (
    <LinkBox
      mb={5}
      px={4}
      py={5}
      borderWidth="1px"
      rounded="xl"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.100", "gray.700")}
      _hover={{ borderColor: "blue.500" }}
      position="relative"
    >
      <LinkOverlay href={achievement.link} rel="noopener" isExternal>

        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="scale-down"
              src={achievement.logo}
              alt={achievement.name}
            />

            <Stack spacing={2} pl={3} align="left">
              <Heading fontSize="xl">{achievement.name}</Heading>
              <Heading as ={'h2'} fontSize="md">{achievement.competition}</Heading>
              <Text fontSize="sm">{achievement.Organisation}</Text>
              <Text fontSize="sm">{achievement.description}</Text>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {achievement.date}
            </Text>
          </Stack>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  )
}

export default AchievementCard