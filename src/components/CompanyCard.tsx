import * as  React from "react"
import { Flex, Heading, Image, LinkBox, LinkOverlay, Stack, Tag, Text, useColorModeValue } from "@chakra-ui/react"
import { Company } from "../types/company"

interface ICompanyCard {
  company: Company;
  colorMode: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company, colorMode }) => {
  return (
    <LinkBox
      px={4}
      py={5}
      borderWidth="1px"
      rounded="xl"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.100", "gray.700")}
      _hover={{ borderColor: "blue.500" }}
      position="relative"
    >
      <LinkOverlay href={company.url} rel="noopener" isExternal>
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="scale-down"
              src={company.logo}
              alt={company.alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {company.title}
              </Heading>
              <Heading
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {company.role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                alignItems="center"
                isInline
                display={["flex", "flex", "flex", "flex"]}
              >
                <Flex flexWrap="wrap">
                  {company.skills.map((skill, index) => (
                    <Tag key={index} size="sm" mx={1} my={1} borderRadius="5px">
                      {skill}
                    </Tag>
                  ))}
                </Flex>
              </Stack>
            </Stack>
          </Flex>
          <Stack display={"flex"}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {company.period}
            </Text>
          </Stack>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  )
}

export default CompanyCard