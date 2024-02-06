import {
  AspectRatio,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import * as React from "react"

function YouTubeModal({ src,linkText }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Text color={'teal'} onClick={onOpen} cursor={'pointer'}>{linkText} (Video)</Text>

      <Modal isOpen={isOpen} size={"5xl"}  onClose={onClose}>
        <ModalOverlay />
        <Box width="90%" height="90%" margin="auto">
          <ModalContent>
            <ModalHeader>YouTube Video</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AspectRatio ratio={16 / 9}>
                <iframe width="100%" height="100%" src={src}
                        title="How to open port 8080 in Google cloud platform?" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Box>
      </Modal>
    </>
  )
}

export default YouTubeModal