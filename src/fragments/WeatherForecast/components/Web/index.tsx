import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Left } from "./components/Left";
import { Right } from "./components/Right";

const WeatherForecastWeb: FC = () => {
  return (
    <Flex h="100%" w="100vw">
      <Left />
      <Right />
    </Flex>
  );
};

export { WeatherForecastWeb };
