import { Box, Divider, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { ContinentsSlide } from '../components/ContinentsSlide'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>World Trip!</title>
      </Head>

      <VStack bgColor='gray.200' pb="30px">
        <Banner />

        <TravelTypes />

        <Divider w="90px" borderColor="blackAlpha.800" borderBottomWidth="2px" />

        <Text
          color="blackAlpha.800"
          fontWeight={500}
          fontSize="3xl"
          lineHeight="54px"
          align="center"
          p="52px 0"
        >
          Vamos nessa ? <br />
          Então escolha seu continente
        </Text>


        <ContinentsSlide />

      </VStack>
    </>
  )
}

export default Home