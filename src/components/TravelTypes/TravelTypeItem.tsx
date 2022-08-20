import { VStack, Heading, Image } from "@chakra-ui/react";

interface TravelTypeItemProps {
  icon: string;
  title: string;
}

export function TravelTypeItem({ icon, title }: TravelTypeItemProps) {
  return (
    <VStack>
      <Image src={icon} w={86} h={86} />
      <Heading fontWeight={600} fontSize="2xl" color="blackAlpha.800">{title}</Heading>
    </VStack>
  )
}