import { Center, Text } from "@chakra-ui/react";
import { FC } from "react";

const Intro: FC = () => {
  return (
    <Center display="flex">
      <Text
        bgGradient="linear(to-r, red.400, blue.400)"
        bgClip="text"
        fontSize={["4xl", "5xl", "6xl", "7xl"]}
        fontWeight="bold"
      >
        Hot or Cold?
      </Text>
    </Center>
  );
};

export { Intro };
