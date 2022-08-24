import { Box, Center, Heading, HStack, Image, Spacer, useBreakpointValue, VStack } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box w="100%" h="368.21px" >
      <Center
        w="100%"
        h="335px"
        p={['6',]}
        bgImg="home-banner.jpg"
        bgPos='0 25%'
        bgSize="cover"
      >
        <HStack maxW="1160px" w="100%" >
          <VStack
            color="white"
            flex="1"
            alignItems="flex-start"
          >
            <Heading
              size={{ base: 'lg', lg: 'xl' }}
              fontWeight={500}
              lineHeight="54px"
              mb="5"
            >
              5 Continentes, infinitas possibilidades.
            </Heading>
            <Heading
              size='sm'
              fontWeight={400}
              color='gray.300'
              lineHeight="30px"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Heading>
          </VStack>


          {isWideVersion && (
            <>
              <Spacer />
              <Box flex="1" justifySelf="flex-end">
                <Image src="icons/airplane.svg" alt="airplane" mb={-120} />
              </Box>
            </>
          )}
        </HStack>
      </Center>
    </Box>
  )
}