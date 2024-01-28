import * as  React from "react"
import { Container, Flex, Heading, Stack, useColorMode, VStack } from "@chakra-ui/react"
import { FaGraduationCap } from "react-icons/fa"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { MotionBox } from "../utils/motion"
import { achivements, companies, educations } from "../constant"
import CompanyCard from "../components/CompanyCard"
import { PageSlideFade, StaggerChildren } from "../utils/page-transitions"

import { FaTrophy } from "react-icons/fa6"
import AchivementCard from "../components/AchivementCard"
import Seo from "../components/seo"
import Layout from "../components/Layout"

function About() {
  const { colorMode } = useColorMode()

  return (
    <Layout>
      <main><Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
        <PageSlideFade>
          <StaggerChildren>
            <Flex alignItems="center" my={10}>
              <Flex alignItems={"center"}>
                <Stack pr={3}>
                  <BsFillBriefcaseFill size={"30px"} />
                </Stack>

                <Heading>Career</Heading>
              </Flex>
            </Flex>

            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={5}
            >
              {companies.map((company, index) => (
                <MotionBox whileHover={{ y: -5 }} key={index}>
                  <CompanyCard
                    key={index}
                    company={company}
                    colorMode={colorMode}
                  />
                </MotionBox>
              ))}
            </VStack>

            <Flex alignItems="center" my={10}>
              <Flex alignItems="center">
                <Stack pr={3}>
                  <FaGraduationCap size={"30px"} />
                </Stack>
                <Heading>Education</Heading>
              </Flex>
            </Flex>

            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={5}
            >
              {educations.map((education, index) => (
                <MotionBox whileHover={{ y: -5 }} key={index}>
                  <CompanyCard
                    key={index}
                    company={education}
                    colorMode={colorMode}
                  />
                </MotionBox>
              ))}
            </VStack>

            <Flex alignItems={"center"} my={10}>
              <Flex alignItems={"center"}>
                <Stack pr={3}>
                  <FaTrophy size={"30px"} />

                </Stack>

                <Heading>Achievements</Heading>
              </Flex>


            </Flex>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={5}
            />
            {achivements.map((achivement, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <AchivementCard
                  key={index}
                  achievement={achivement}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}


          </StaggerChildren>
        </PageSlideFade>
      </Container></main>
    </Layout>
  )
}

export const Head = () => <Seo title="About" description={"Learn about my carrer, experience and achivments."} children={undefined}></Seo>

export default About