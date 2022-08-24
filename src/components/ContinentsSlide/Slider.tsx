import { Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

interface SliderProps {
  title: string;
  description: string;
  imagePath: string;
  href: string;
}

export function Slider({ title, description, imagePath, href }: SliderProps) {
  return (
    <Link href={href}>
      <Center
        h="100%"
        px={{ base: '10', lg: '0' }}
        bgImage={imagePath}
        bgColor="rgba(0, 0, 0, 0.6)"
        bgBlendMode="darken"
        bgPosition="50% 70%"
        bgSize="cover"
        cursor="pointer"
      >
        <VStack>
          <Text
            color="gray.200"
            fontWeight={700}
            fontSize={{ base: '2xl', lg: '5xl' }}
          >
            {title}
          </Text>
          <Text
            align='center'
            color="gray.300"
            fontWeight={700}
            fontSize={{ base: 'md', lg: '2xl' }}
          >
            {description}
          </Text>
        </VStack>
      </Center>
    </Link>
  )
}