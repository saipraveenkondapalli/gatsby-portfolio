import { Box, IconButton } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import * as React from "react"
import { useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const controls = useAnimation()

  const nextImage = async () => {
    await controls.start({ x: -100, opacity: 0, transition: { duration: 0.5 } })
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
    controls.start({ x: 100, opacity: 0 })
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } })
  }

  const prevImage = async () => {
    await controls.start({ x: 100, opacity: 0, transition: { duration: 0.5 } })
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
    controls.start({ x: -100, opacity: 0 })
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } })
  }

  return (
    <Box position="relative">
      <motion.img
        src={images[currentImageIndex]}
        alt="carousel"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        animate={controls}
      />
      <IconButton
        aria-label="Previous image"
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="5px"
        top="50%"
        onClick={prevImage}
        bgColor="aquamarine" // semi-transparent white background
      />
      <IconButton
        aria-label="Next image"
        icon={<ChevronRightIcon />}
        position="absolute"
        right="5px"
        top="50%"
        onClick={nextImage}
        bgColor="aquamarine" // semi-transparent white background
      />
    </Box>
  )
}

export default ImageCarousel