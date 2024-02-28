import * as  React from "react"
import { Avatar, Box, Button, ButtonGroup, Heading, Link } from "@chakra-ui/react"
import { BiDownload, BiPhoneCall } from "react-icons/bi"
import { MotionFlex } from "../../utils/motion"
import Paragraph from "../Paragraph"
//@ts-ignore
import ProfilePic from "../../images/profile_picture.png"

interface IProfileSection {
}

const ProfileSection: React.FC<IProfileSection> = () => {
  return (
    <Box>
      <MotionFlex
        alignItems="center"
        justifyContent="space-between"
        opacity="0"
        initial={{
          opacity: 0,
          translateX: 150,
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          Hey, I am Sai! <span className="waving-hand">👋</span>
        </Heading>
        <MotionFlex alignItems={"flex-end"} whileHover={{ scale: 1.2 }}>
          <Avatar
            name="Sai Praveen Kondapalli"
            src={ProfilePic}
            mb={5}
            size="lg"
          />
        </MotionFlex>
      </MotionFlex>

      <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
        Software Developer
      </Paragraph>
      <Paragraph textProps={{ fontSize: "md", lineHeight: 1.6 }}>
        I am a recent graduate with a bachelor's degree in technology. I was a
        member of the press club at college where I primarily focused on
        gathering and writing news articles. I have a passion for building
        experiences that help others, I have applied my skills in react, python,
        SQL, No SQL, MongoDB, AWS-cloud among other skills to various projects
        at college, in Internship at EduSkills foundation and in my freelance
        work at Inherit Cloud. <br />

        I have experience in working with diverse teams with people from across
        the world. In 2021, I participated in the Global Entrepreneurship
        Exchange program, a leading workshop on entrepreneurship at Manning
        School of business, USA. I collaborated with people and won the business
        pitch competition in the first place. In 2022, I formed my own team and
        guided them which ultimately led to the team winning the competition in
        the first place.
        <br />I am looking for entry level roles in the tech industry
        with opportunities to learn skills and grow in the sector
      </Paragraph>

      <Box mt={5}>
        <ButtonGroup>
          <Link href={"/contact"} style={{ textDecoration: "none" }}>
            <Button
              colorScheme="blue"
              size="sm"
              margin={"5px"}
              leftIcon={<BiPhoneCall />}
            >
              Contact Me
            </Button>
          </Link>
          <Link
            href={"https://bit.ly/saipraveen-resume"}
            isExternal={true}
            style={{ textDecoration: "none" }}
          >
            <Button
              colorScheme="blue"
              size="sm"
              margin={"5px"}
              leftIcon={<BiDownload />}
            >
              Resume
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default ProfileSection