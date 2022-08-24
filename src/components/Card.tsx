import { Box, VStack, HStack, Image, Text, Circle, Spacer } from "@chakra-ui/react";

interface CardProps {
  city: string;
  country: string;
  image: string;
  countryFlag: string;
}

export function Card({ image, city, country, countryFlag }: CardProps) {
  return (
    <Box w='64' h='72' borderRadius='base' overflow='hidden' m='0'>
      <Image
        src={image}
        w='100%'
      />
      <HStack
        border='1px'
        borderTop='0'
        borderColor='yellow.500'
        borderRadius='0px 0px 4px 4px'
        bgColor='white'
        overflow='hidden'
        p='6'
      >
        <VStack alignItems="flex-start">
          <Text
            fontFamily='Barlow'
            fontWeight={600}
            fontSize='xl'
            color='blackAlpha.800'
          >
            {city}
          </Text>
          <Text
            fontFamily='Barlow'
            fontWeight={500}
            fontSize='16px'
            color='gray.400'
          >
            {country}
          </Text>
        </VStack>

        <Spacer />

        <Circle
          size='30px'
          bgColor='red'
          overflow='hidden'
          bgImage={countryFlag}
          bgSize='cover'
          bgPosition='center'
        />
      </HStack>
    </Box>
  )
}