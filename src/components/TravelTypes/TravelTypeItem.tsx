import { VStack, Heading, Image, useBreakpointValue, Circle, Stack, Text, Flex } from "@chakra-ui/react";

interface TravelTypeItemProps {
  icon: string;
  title: string;
}

export function TravelTypeItem({ icon, title }: TravelTypeItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      direction={{ base: 'row', lg: 'column' }}
      justify="center"
      align='center'
    >

      {isWideVersion ?
        (<Image src={icon} w={86} h={86} />) :
        (<Circle size={4} bgColor='yellow.500' mr='3' />)

      }
      <Text as='span' fontWeight={600} fontSize={{ base: 'lg', lg: '2xl' }} color="blackAlpha.800" >{title}</Text>
    </Flex >
  )
}