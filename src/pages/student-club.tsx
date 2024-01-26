import * as React from "react"
import { Alert, AlertIcon, Box, Button, Container, Heading, Image, ListItem, OrderedList } from "@chakra-ui/react"
// @ts-ignore
import studentClubTechStack from "../images/studentClubTechStack.png"
// @ts-ignore
import img1 from "../images/student/img1.png"
// @ts-ignore
import img2 from "../images/student/img2.png"
// @ts-ignore
import img3 from "../images/student/img3.png"

import Layout from "../components/Layout"

import { FaExternalLinkAlt } from "react-icons/fa"
import ImageCarousel from "../components/ImageCarousel"


function StudentClub() {
  return (
    <Layout>
      <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
        <Heading as={"h1"} color={"yellow.400"} mb={5}>Student Club Portal</Heading>
        <Heading as={"h2"} fontSize={"xl"} color={"yellow.400"} mt={10} mb={5}>Tech Stack</Heading>
        <Image src={studentClubTechStack}></Image>
        <Box display={"flex"} justifyContent="center">
          <Button p={5} as="a" href="https://interviewprep.pro" target="_blank" iconSpacing={2}
                  rightIcon={<FaExternalLinkAlt />}
                  background={"blue.400"} borderRadius={20} mt={5}>Visit Site</Button></Box>

        <Box>
          <Heading as={"h2"} color={"yellow.400"} mt={10}>What is Interview Prep Pro?</Heading>
          <Box mt={5}>
            <p>
              "Student Club Portal" is a website aimed at streamlining and automating the management of activities for
              the "Press Club" at Pragati Engineering College in Surampalem, India. The website provides an efficient
              and organized platform to handle various club-related tasks, including report writing, grammatical
              checking, attendance tracking, and more. Prior to the implementation of this website, all club activities
              were recorded manually on paper, which often resulted in inefficiencies and errors. The website has
              resolved these issues and has saved time for both the club members and coordinators, while also providing
              valuable insights into the performance of the students.hat users are well-prepared for the types of
              questions they may encounter in real-world
              interviews.
            </p>
          </Box>
          <Box mt={5}>
            <Heading as={"h2"} color={"yellow.400"} mt={10}>Access levels</Heading>
            <Heading as={"h3"} color={"yellow.400"} mt={5}>Admin</Heading>
            <OrderedList p={2} spacing={2}>
              <ListItem>Add Students</ListItem>
              <ListItem>Assign Coordinators</ListItem>
              <ListItem>Grant/Reject leave application for club events</ListItem>
            </OrderedList>
            <Heading as={"h3"} color={"yellow.400"} mt={2}>Coordinator</Heading>
            <OrderedList p={2} spacing={2}>
              <ListItem>Schedule events</ListItem>
              <ListItem>Assign reporting writing to students</ListItem>
              <ListItem>Keep track of club badges with students</ListItem>
            </OrderedList>
            <Heading as={"h3"} color={"yellow.400"} mt={2}>Student</Heading>
            <OrderedList p={2} spacing={2}>
              <ListItem>Check for upcoming events</ListItem>
              <ListItem>Submit reports</ListItem>
              <ListItem>Apply for leave</ListItem>
            </OrderedList>
            <Heading as={"h2"} color={"yellow.400"} mt={10}>Dynamic Dashboard</Heading>
            <Box mt={5} p={5}>

              <ImageCarousel images={[img1, img2, img3]} />
            </Box>
            <Alert status={"warning"}>
              <AlertIcon/>
              This website is accessible only on college intranet.
            </Alert>
          </Box>
        </Box>

      </Container>


    </Layout>
  )
}

export default StudentClub