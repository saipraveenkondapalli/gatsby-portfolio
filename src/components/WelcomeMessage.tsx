import * as React from "react"
import { useEffect, useState } from "react"
import { Box, Heading, useToast, CloseButton, Text } from "@chakra-ui/react"

function WelcomeMessage() {
  const toast = useToast()


  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")
    params.delete("id")
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname
    window.history.pushState({ path: newUrl }, "", newUrl)


    if (id) {
      fetch(`https://services.saipraveen.me/main_site/job/track/?id=${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          
          
          return toast({
            render: () => (
              <CustomToast
                title={`Welcome ${data[0].fields.company_name} recruiter! 💫`}
                description="Thrilled to have you here! Explore my journey and skills. Any questions? Reach out—I'd love to connect and discuss how I can contribute to your company."
                onClose={() => toast.closeAll()}
              />
            ),
            duration: 20000,
            isClosable: true,
            position: "top-right"
          })
        })
        .catch(error => {
          console.error("Error fetching data", error)
          
        })
    }
  }, [])

  return null
}





const CustomToast = ({ title, description, onClose }) => (

  <Box color="black" p={3} bg="white" position="relative" borderRadius={5} borderLeft="6px solid" borderColor={"blue.400"}>
    <Text fontWeight={"bold"}>{title}</Text>
    <div>{description}</div>
    <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
  </Box>
);


export default WelcomeMessage