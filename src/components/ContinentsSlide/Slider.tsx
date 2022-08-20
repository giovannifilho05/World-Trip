import { Center, Text, VStack } from "@chakra-ui/react";

interface SliderProps {
  title: string;
  description: string;
  imagePath: string;
}

export function Slider({ title, description, imagePath }: SliderProps) {
  return (
      <Center
        h="100%"
        bgImage={imagePath}
        bgColor="rgba(0, 0, 0, 0.4)"
        bgBlendMode="darken"
        bgPosition="50% 70%"
        bgSize="cover"
      >
        <VStack>
          <Text
            color="white"
            fontWeight={700}
            fontSize="5xl"
          >
            {title}
          </Text>
          <Text
            color="white"
            fontWeight={700}
            fontSize="2xl"
          >
            {description}
          </Text>
        </VStack>
      </Center>
    )
}