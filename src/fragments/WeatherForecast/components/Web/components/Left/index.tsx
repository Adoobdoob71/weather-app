import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { useAppSelector } from "src/redux/weatherForecast/types";
import { WEATHER_ICON_URL } from "src/utils/constants";

const Left: FC = () => {
  const weatherForecast = useAppSelector((state) => state.weatherForecast);
  const todayData = weatherForecast.sevenDayForecast?.data[0];
  const { colorMode } = useColorMode();

  const date = new Date();

  return (
    <Box
      flex={2}
      bg={colorMode === "dark" ? "gray.700" : "white"}
      display="flex"
      flexDir="column"
      alignItems="center"
      paddingBlock={8}
    >
      <Image
        src={`${WEATHER_ICON_URL}${todayData?.weather.icon}.png`}
        boxSize={[120, 120, 150, 200]}
      />
      <HStack mt={8}>
        <Text fontSize={["4xl", "4xl", "5xl", "6xl"]}>{todayData?.temp}</Text>
        <Text fontSize={["2xl", "2xl", "2xl", "4xl"]}>℃</Text>
      </HStack>
      <Text mt={4}>{todayData?.weather.description}</Text>
      <HStack mt={8}>
        <Text>Today, </Text>
        <Text color="GrayText">
          {date.toLocaleTimeString("en-us", {
            hourCycle: "h24",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </HStack>
      <Text mt="auto">
        {weatherForecast.sevenDayForecast?.city_name},{" "}
        {weatherForecast.sevenDayForecast?.country_code}
      </Text>
    </Box>
  );
};

export { Left };
