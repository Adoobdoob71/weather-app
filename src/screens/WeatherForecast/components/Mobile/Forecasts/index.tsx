import { Flex, Grid, Tab, TabList, Tabs } from "@chakra-ui/react";
import { FC, useState } from "react";
import { WeatherCard } from "src/components/WeatherCard";
import { useAppSelector } from "src/redux/weatherForecast/types";

const Forecasts: FC = () => {
  const [forecastDays, setForecastDays] = useState(0);

  const weatherForecast = useAppSelector((state) => state.weatherForecast);

  return (
    <Flex flexDir="column" alignItems="center" mt={12}>
      <Tabs
        variant="soft-rounded"
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
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        columnGap={3}
        rowGap={6}
        marginBlock={8}
      >
        {weatherForecast.sevenDayForecast?.data
          .slice(0, forecastDays ? 7 : 3)
          .map((item, index) => (
            <WeatherCard
              temp={item.temp}
              icon={item.weather.icon}
              description={item.weather.description}
              valid_date={new Date(item.valid_date)}
              key={index}
            />
          ))}
      </Grid>
    </Flex>
  );
};

export { Forecasts };
