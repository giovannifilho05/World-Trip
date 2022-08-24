import { NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, HStack, Spacer, Text, Tooltip, VStack } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";

import { Card } from "../../components/Card";

const Continents: NextPage = () => {
  const { query: { name } } = useRouter()
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <VStack bgColor='gray.200' pb='6'>

        {/* Banner */}
        <Center
          w="100%"
          h={{ base: "150px", md: "300px", lg: "400px" }}
          bgColor="rgba(0, 0, 0, 0.3)"
          bgImage='https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          bgBlendMode="darken"
          bgSize="cover"
          bgPosition="center"
        >

          <VStack
            maxW='1160px'
            w='100%'
            h='100%'
            align={{ base: "center", md: "start" }}
            justify={{ base: "center", md: "end" }}
            p={['4', '6', '8']}
          >
            <Heading
              as="h1"
              color="white"
              fontWeight={600}
              fontSize={{ base: "28px", md: '4xl ', lg: "5xl" }}
            >
              América do Sul
            </Heading>
          </VStack>
        </Center>

        {/* Info */}
        <Flex
          maxW="1160px"
          w="100%"
          px={['4', '6', '8']}
          py="80px"
          gap='10'
          direction={{ base: "column", lg: "row" }}
        >
          <Text
            flex="1"
            color="blackAlpha.800"
            fontWeight={400}
            fontSize={{ base: "lg", md: "2xl" }}
            lineHeight={{ base: "8", md: "9" }}
            textAlign='justify'
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se
            da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural,
            o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>

          <HStack flex="1" gap={9} justify="space-between" >
            <VStack>
              <Text
                fontWeight={600}
                fontSize={{ base: "28px", md: '4xl ', lg: "5xl" }}
                lineHeight='10'
                color="yellow.500"
              >50</Text>
              <Text
                as="span"
                margin="0"
                fontWeight={600}
                fontSize={{ base: "lg", md: "2xl" }}
                color="blackAlpha.800"
              >
                países
              </Text>
            </VStack>
            <VStack>
              <Text
                fontWeight={600}
                fontSize={{ base: "28px", md: '4xl ', lg: "5xl" }}
                lineHeight='10'
                color="yellow.500"
              >60</Text>
              <Text
                as="span"
                margin="0"
                fontWeight={600}
                fontSize={{ base: "lg", md: "2xl" }}
                color="blackAlpha.800"
              >
                línguas
              </Text>
            </VStack>
            <VStack>
              <Text
                fontWeight={600}
                fontSize={{ base: "28px", md: '4xl ', lg: "5xl" }}
                lineHeight='10'
                color="yellow.500"
              >27</Text>

              <HStack>
                <Text
                  as="span"
                  margin="0"
                  fontWeight={600}
                  fontSize={{ base: "lg", md: "2xl" }}
                  color="blackAlpha.800"
                >
                  cidades +100

                </Text>
                <Tooltip hasArrow label='conheça além das 27 cidades abaixo' fontSize='md'>
                  <span>
                    <BiInfoCircle color="gray" />
                  </span>
                </Tooltip>
              </HStack>
            </VStack>
          </HStack>
        </Flex>

        <Box maxW="1160px" w="100%" p={['4', '6', '8']}>
          <Heading
            fontWeight={500}
            color='blackAlpha.800'
            fontSize={{ base: "2xl", md: '3xl ', lg: "4xl" }}
            mb='9'
          >
            Cidades +100
          </Heading>

          <Flex
            wrap='wrap'
            gap='5'
            direction={{ base: "column", sm: "row" }}
            justify={{ base: "center", lg: "flex-start" }}
            align='center'
          >
            <Card
              city='Londres'
              country='Reino Unido'
              image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              countryFlag='https://c4.wallpaperflare.com/wallpaper/95/816/854/britain-flag-great-britain-united-kingdom-union-jack-hd-wallpaper-preview.jpg'
            />
            <Card
              city='Londres'
              country='Reino Unido'
              image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              countryFlag='https://c4.wallpaperflare.com/wallpaper/95/816/854/britain-flag-great-britain-united-kingdom-union-jack-hd-wallpaper-preview.jpg'
            />
            <Card
              city='Londres'
              country='Reino Unido'
              image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              countryFlag='https://c4.wallpaperflare.com/wallpaper/95/816/854/britain-flag-great-britain-united-kingdom-union-jack-hd-wallpaper-preview.jpg'
            />
            <Card
              city='Londres'
              country='Reino Unido'
              image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              countryFlag='https://c4.wallpaperflare.com/wallpaper/95/816/854/britain-flag-great-britain-united-kingdom-union-jack-hd-wallpaper-preview.jpg'
            />
            <Card
              city='Londres'
              country='Reino Unido'
              image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              countryFlag='https://c4.wallpaperflare.com/wallpaper/95/816/854/britain-flag-great-britain-united-kingdom-union-jack-hd-wallpaper-preview.jpg'
            />
            <Card
              city='Londres'
              country='Reino Unido'
              image='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              countryFlag='https://c4.wallpaperflare.com/wallpaper/95/816/854/britain-flag-great-britain-united-kingdom-union-jack-hd-wallpaper-preview.jpg'
            />
          </Flex>
        </Box>
      </VStack>
    </>
  )
}

export default Continents;