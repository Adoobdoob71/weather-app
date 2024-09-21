import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "src/components/Header";
import { WeatherCard } from "src/components/WeatherCard";
import { useAppSelector } from "src/redux/weatherForecast/types";
import { TodayWeather } from "../../../../../../components/TodayWeather";

const Right: FC = () => {
  const [forecastDays, setForecastDays] = useState(0);
  const { colorMode } = useColorMode();

  const weatherForecast = useAppSelector((state) => state.weatherForecast);

  const navigate = useNavigate();

  const goBack = () => navigate("/");

  return (
    <Flex
      flexDir="column"
      ms={285}
      h="100vh"
      bg={colorMode === "dark" ? undefined : "gray.100"}
    >
      <Header
        leftElement={
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
      <Tabs
        variant="soft-rounded"
        alignSelf="center"
        colorScheme="blue"
        defaultIndex={forecastDays}
        onChange={(index) => setForecastDays(index)}
        ms={8}
        mt={2}
      >
        <TabList>
          <Tab me={4}>3 Days</Tab>
          <Tab>A Week</Tab>
        </TabList>
      </Tabs>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        rowGap={4}
        paddingInline={[16, 16, 24, 36, 52]}
        justifyItems="center"
        paddingBlock={1}
        alignItems="center"
        mt={8}
      >
        {weatherForecast.sevenDayForecast?.data
          .slice(0, forecastDays ? 7 : 3)
          .map((item, index) => (
            <WeatherCard
              icon={item.weather.icon}
              temp={item.temp}
              key={index}
              valid_date={new Date(item.valid_date)}
              me={2}
              description={item.weather.description}
            />
          ))}
      </Box>
      <Box flex={1}></Box>
      <Flex justifyContent="center" mb={8}>
        <TodayWeather />
      </Flex>
    </Flex>
  );
};

export { Right };
