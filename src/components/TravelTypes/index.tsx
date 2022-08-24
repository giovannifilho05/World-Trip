import { Flex, HStack, Spacer } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
  return (
    <Flex
      maxW="1160px"
      w="100%"
      px={['6', '4']}
      py={['20px', '80px']}
      wrap="wrap"
      justify="space-around"
      gap={{base: '2', lg: '4'}}
      align='center'
    >
      <TravelTypeItem icon='icons/cocktail.svg' title="vida noturna" />
      <Spacer />
      <TravelTypeItem icon='icons/surf.svg' title="praia" />
      <Spacer />
      <TravelTypeItem icon='icons/building.svg' title="moderno" />
      <Spacer />
      <TravelTypeItem icon='icons/museum.svg' title="clássico" />
      <Spacer />
      <TravelTypeItem icon='icons/earth.svg' title="e mais..." />
    </Flex>
  )
}