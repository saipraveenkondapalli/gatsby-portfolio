import * as React from "react"

import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"
// @ts-ignore
import interviewPrepPro from "../images/ipp.png"
// @ts-ignore
import { FaExternalLinkAlt } from "react-icons/fa"
import Layout from "../components/Layout"

function InterviewPrepPro() {
  return (
    <Layout>
      <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
        <Heading as={"h1"} color={"yellow.400"} mb={5}>
          Interview Prep Pro
        </Heading>
        <Heading as={"h2"} fontSize={"xl"} color={"yellow.400"} mt={10} mb={5}>
          Tech Stack
        </Heading>
        <Image src={interviewPrepPro}></Image>
        <Box display={"flex"} justifyContent="center">
          <Button
            p={5}
            as="a"
            href="https://interview-prep-pro.vercel.app"
            target="_blank"
            iconSpacing={2}
            rightIcon={<FaExternalLinkAlt />}
            background={"blue.400"}
            borderRadius={20}
            mt={5}
          >
            Visit Site
          </Button>
        </Box>
        <Box>
          <Heading as={"h2"} color={"yellow.400"} mt={10}>
            What is Interview Prep Pro?
          </Heading>
          <Box mt={5}>
            <p>
              "Interview Prep Pro" is a project designed to help individuals
              prepare for coding interviews at top technology companies. It is
              built using Python, MongoDB, and Bootstrap, and features over 1200
              coding questions from 150+ of the industry's leading companies.
              The questions are organized by category and company, making it
              easy for users to find relevant content and start practicing their
              skills. Additionally, the project includes direct links to
              Leetcode practice problems, providing users with a comprehensive
              resource for coding interview preparation. The project is also in
              progress and it is Enabling users to contribute questions to keep
              the resource relevant to the current job market. This feature will
              allow the project to stay up-to-date with the latest trends and
              technologies in the industry, and ensure that users are
              well-prepared for the types of questions they may encounter in
              real-world interviews.
            </p>
            <Heading as={"h2"} color={"yellow.400"} mt={10}>
              Features
            </Heading>

            <UnorderedList spacing={2} p={3}>
              <ListItem>
                Over 1200 coding questions from 150+ of the industry's leading
                companies
              </ListItem>
              <ListItem>
                Questions are organized by category and company
              </ListItem>
              <ListItem>Direct links to Leetcode practice problems</ListItem>
              <ListItem>
                Enabling users to contribute questions to keep the resource
                relevant to the current job market
              </ListItem>
            </UnorderedList>

            <Heading as={"h2"} color={"yellow.400"} mt={10}>
              Chrome Extension
            </Heading>
            <p>
              In addition to the web platform, Interview Prep Pro also offers a
              powerful Chrome extension that enhances the user experience and
              makes it even easier for users to access the content they need.
              The Chrome extension directly displays the companies mentioned in
              the description of the Leetcode problem page. This means that when
              users are browsing Leetcode problems, they can quickly see which
              companies are associated with each problem, making it easy to
              target their practice efforts towards specific companies they are
              interested in.
            </p>

            <Heading as={"h3"} fontSize={"xl"} color={"yellow.400"} mt={10}>
              How to Install and Use the Chrome Extension
            </Heading>
            <UnorderedList>
              <ListItem>Download the ZIP file</ListItem>
              <ListItem>
                Once the download is complete, extract the ZIP file and save the
                contents in a folder on your computer
              </ListItem>
              <ListItem>
                Open the Google Chrome browser on your computer and click on the
                three-dot menu icon in the upper-right corner of the window
              </ListItem>
              <ListItem>
                From the drop-down menu, select "More tools" and then click on
                "Extensions" to open the extensions page
              </ListItem>
              <ListItem>
                Turn on the "Developer mode" toggle switch located in the
                upper-right corner of the extensions page
              </ListItem>
              <ListItem>
                Click on the "Load unpacked" button located in the upper-left
                corner of the extensions page
              </ListItem>
              <ListItem>
                Select the folder where you previously unzipped the Interview
                Prep Pro Chrome extension
              </ListItem>
              <ListItem>
                Once you have selected the folder, click on "Open" to load the
                extension
              </ListItem>
              <ListItem>
                The Interview Prep Pro Chrome extension will now be installed
                and visible in the extensions list
              </ListItem>
              <ListItem>
                Go to the Leetcode website and open any problem page. The
                extension will automatically load the associated companies into
                the problem description
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default InterviewPrepPro
