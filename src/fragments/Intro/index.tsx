import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Search } from "./components/Search";
import { Header } from "src/components/Header";

const Intro: FC = () => {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        h="100%"
        alignItems="center"
        marginTop="15vh"
      >
        <Text
          bgGradient="linear(to-r, blue.400, yellow.300)"
          bgClip="text"
          fontSize={["5xl", "5xl", "6xl", "7xl"]}
          fontWeight="bold"
        >
          Weather App
        </Text>
        <Search />
      </Box>
    </Flex>
  );
};

export { Intro };
