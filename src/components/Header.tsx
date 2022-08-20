import { Center, Image as ChakraImage } from "@chakra-ui/react";

import Image from "next/image";

export function Header() {
  return (
    <Center p="7" w="100%">
      <ChakraImage
        // as={Image}
        src="logo.svg"
        alt="world trip logo"
        w="184.06px"
        h= "45.92px"
      />
    </Center>
  )
}