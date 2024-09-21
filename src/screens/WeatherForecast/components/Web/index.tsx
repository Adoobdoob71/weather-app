import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Left } from "./components/Left";
import { Right } from "./components/Right";

const WeatherForecastWeb: FC = () => {
  return (
    <Box>
      <Left />
      <Right />
    </Box>
  );
};

export { WeatherForecastWeb };
