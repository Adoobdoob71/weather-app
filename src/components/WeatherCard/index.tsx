import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Data, WeatherResponse } from "src/api/types";
import { WEATHER_ICON_URL } from "src/utils/constants";

interface Props {
  city_name?: string;
  data: Data;
  // index: number;
}

const WeatherCard: FC<Props> = ({ city_name, data }) => {
  console.log(data);
  return (
    <Flex flexDir="column" alignItems="center">
      <Image src={`${WEATHER_ICON_URL}${data.weather.icon}.png`} />
      <Text>{city_name}</Text>
    </Flex>
  );
};

export { WeatherCard };
