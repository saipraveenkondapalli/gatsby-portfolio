import * as  React from "react"
import { Avatar, Box, Button, ButtonGroup, Heading, Link } from "@chakra-ui/react"
import { BiDownload, BiPhoneCall } from "react-icons/bi"
import { MotionFlex } from "../../utils/motion"
import Paragraph from "../Paragraph"

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
          translateX: 150
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: 0.5
          }
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
            src="/profile_picture.png"
            mb={5}
            size="lg"
          />
        </MotionFlex>
      </MotionFlex>

      <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
        Software Developer
      </Paragraph>
      <Paragraph textProps={{ fontSize: "md", lineHeight: 1.6 }}>
        I am an aspiring software engineer driven by a profound passion for solving intricate problems and a keen
        interest in developing efficient solutions. With a strong analytical mindset, I approach challenges with a
        curious and innovative outlook. Collaborating seamlessly within diverse teams, I communicate effectively and
        contribute to collective success. My relentless pursuit of knowledge and growth fuels my desire to make a
        meaningful impact in software engineering, where I aim to bring forth creative and transformative solutions to
        address real-world needs.
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
          <Link href={"https://bit.ly/saipraveen-resume"} isExternal={true} style={{ textDecoration: "none" }}>
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