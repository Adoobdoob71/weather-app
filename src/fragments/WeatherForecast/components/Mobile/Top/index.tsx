import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useAppSelector } from "src/redux/weatherForecast/types";
import { WEATHER_ICON_URL } from "src/utils/constants";

const Top: FC = () => {
  const weatherForecast = useAppSelector((state) => state.weatherForecast);

  return (
    <Flex flexDir="column" alignItems="center" mt={32}>
      <Image
        src={`${WEATHER_ICON_URL}${weatherForecast.sevenDayForecast?.data[0].weather.icon}.png`}
        boxSize={240}
      />
      <Flex mt={0} alignItems="center">
        <Text fontSize="6xl">
          {weatherForecast.sevenDayForecast?.data[0].max_temp
            ? weatherForecast.sevenDayForecast?.data[0].max_temp.toFixed(0)
            : "--"}
        </Text>
        <Text fontSize="2xl" color="GrayText" mt={5} ms={2}>
          /
          {weatherForecast.sevenDayForecast?.data[0].low_temp
            ? weatherForecast.sevenDayForecast?.data[0].low_temp.toFixed(0)
            : "--"}
        </Text>
        <Text fontSize="2xl" ms={2}>
          ℃
        </Text>
      </Flex>
      <Text fontSize="2xl" mt={2}>
        {weatherForecast.sevenDayForecast?.data[0].weather.description}
      </Text>
    </Flex>
  );
};

export { Top };
