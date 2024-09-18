import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  HStack,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "src/components/Header";
import { WeatherCard } from "src/components/WeatherCard";
import { useAppSelector } from "src/redux/weatherForecast/types";

const Right: FC = () => {
  const { colorMode } = useColorMode();

  const weatherForecast = useAppSelector((state) => state.weatherForecast);

  const navigate = useNavigate();

  const goBack = () => navigate("/");

  return (
    <Box
      display="flex"
      flexDir="column"
      flex={8}
      bg={colorMode === "dark" ? undefined : "gray.100"}
    >
      <Header
        left={
          <Button
            colorScheme="yellow"
            leftIcon={<ChevronLeftIcon />}
            size="sm"
            onClick={goBack}
          >
            Go Back
          </Button>
        }
      />
      <Tabs variant="soft-rounded" colorScheme="blue" ms={8} mt={2}>
        <TabList>
          <Tab me={4}>3 Days</Tab>
          <Tab>7 Days</Tab>
        </TabList>
      </Tabs>
      <HStack overflow="hidden" ms={8} mt={8}>
        {weatherForecast.sevenDayForecast?.data
          .slice(0, 7)
          .map((item, index) => (
            <WeatherCard
              icon={item.weather.icon}
              temp={item.temp}
              key={index}
              city_name={item.weather.description}
            />
          ))}
      </HStack>
    </Box>
  );
};

export { Right };
