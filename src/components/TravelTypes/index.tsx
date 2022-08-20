import { HStack, Spacer } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
  return (
    <HStack w="1160px">
      <TravelTypeItem icon='icons/cocktail.svg' title="vida noturna"/>
      <Spacer />
      <TravelTypeItem icon='icons/surf.svg' title="praia"/>
      <Spacer />
      <TravelTypeItem icon='icons/building.svg' title="moderno"/>
      <Spacer />
      <TravelTypeItem icon='icons/museum.svg' title="clássico"/>
      <Spacer />
      <TravelTypeItem icon='icons/earth.svg' title="e mais..."/>
    </HStack>
  )
}