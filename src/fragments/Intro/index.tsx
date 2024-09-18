import { Center, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Search } from "./components/Search";
import { BigCitiesForecast } from "./components/BigCitiesForecast";
import { Header } from "src/components/Header";

const Intro: FC = () => {
  return (
    <>
      <Header />
      <Center display="flex" flexDirection="column">
        <Text
          bgGradient="linear(to-r, blue.400, yellow.300)"
          bgClip="text"
          fontSize={["5xl", "5xl", "6xl", "7xl"]}
          fontWeight="bold"
          mt={12}
        >
          Weather App
        </Text>
        <Search />
        <BigCitiesForecast />
      </Center>
    </>
  );
};

export { Intro };
