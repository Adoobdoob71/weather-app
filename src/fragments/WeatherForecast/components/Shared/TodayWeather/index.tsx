import { Card, CardProps, Flex, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { useAppSelector } from "src/redux/weatherForecast/types";

const TodayWeather: FC<CardProps> = (props) => {
  const weatherForecast = useAppSelector((state) => state.weatherForecast);

  return (
    <Card w={["90%", "90%", "85%", "85%", "70%"]} paddingBlock={4} {...props}>
      <Text textAlign="center" fontSize="xl">
        Today
      </Text>
      <Flex justifyContent="space-between" alignItems="center" mt={2}>
        <VStack flex={1}>
          <Text fontSize="xx-large">
            {weatherForecast.sevenDayForecast?.data[0].rh}%
          </Text>
          <Text fontSize="md">Humidity</Text>
        </VStack>
        <VStack flex={1}>
          <Flex>
            <Text fontSize="xx-large">
              {weatherForecast.sevenDayForecast?.data[0].wind_spd}
            </Text>
            <Text fontSize="2xs" mt={6} ms={1}>
              km/h
            </Text>
          </Flex>
          <Text fontSize="md">Wind Speed</Text>
        </VStack>
        <VStack flex={1}>
          <Flex>
            <Text fontSize="xx-large">
              {weatherForecast.sevenDayForecast?.data[0].temp}
            </Text>
            <Text fontSize="md">℃</Text>
          </Flex>
          <Text fontSize="md">Temperature</Text>
        </VStack>
      </Flex>
    </Card>
  );
};

export { TodayWeather };
