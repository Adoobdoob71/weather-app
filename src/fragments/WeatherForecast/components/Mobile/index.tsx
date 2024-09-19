import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "src/components/Header";
import { Top } from "./Top";
import { TodayWeather } from "../Shared/TodayWeather/index";
import { Forecasts } from "./Forecasts";

const WeatherForecastMobile: FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  const { colorMode } = useColorMode();

  return (
    <Box h="100vh">
      <Header
        leftElement={
          <IconButton
            icon={<ChevronLeftIcon fontSize={["xl", "xl", "2xl", "3xl"]} />}
            onClick={goBack}
            aria-label="Go Back"
            colorScheme="yellow"
            size={["sm", "sm", "md", "lg"]}
          />
        }
        bg={colorMode === "dark" ? "gray.800" : "white"}
        position="fixed"
        paddingInline={9}
      />
      <Flex flexDir="column" alignItems="center" h="100vh">
        <Top />
        <TodayWeather mt={8} />
        <Forecasts />
      </Flex>
    </Box>
  );
};

export { WeatherForecastMobile };
