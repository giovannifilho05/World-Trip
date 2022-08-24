import { Box, Center, IconButton, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FcPrevious } from "react-icons/fc"

export function Header() {
  const router = useRouter()
  let backButton = false;

  if (router.asPath !== '/') {
    backButton = true;
  }
  return (
    <Center p="7" w="100%" bgColor='gray.200' >

      <Center w='1160px' position='relative'>
        {backButton && (
          <IconButton
            color='yellow.500'
            aria-label='Back to previous page'
            icon={<FcPrevious />}
            variant='unstyled'
            fontSize='xl'
            position='absolute'
            left='0'
            onClick={() => router.back()}
          />
        )}

        <Link href='/'>
          <ChakraImage
            // as={Image}
            src="/logo.svg"
            alt="world trip logo"
            w="184.06px"
            h="45.92px"
          />
        </Link>
      </Center>


    </Center>
  )
}