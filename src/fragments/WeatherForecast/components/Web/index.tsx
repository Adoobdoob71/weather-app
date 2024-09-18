import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Header } from "src/components/Header";
import { Left } from "./components/Left";
import { Right } from "./components/Right";

const WeatherForecastWeb: FC = () => {
  return (
    <Flex h="100%">
      <Left />
      <Right />
    </Flex>
  );
};

export { WeatherForecastWeb };
