import { Box, Flex, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
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
      w="fit-content"
      position="absolute"
      h="100vh"
      bg={colorMode === "dark" ? "gray.700" : "white"}
      display="flex"
      flexDir="column"
      alignItems="center"
      paddingBlock={8}
      paddingInline={12}
    >
      <Image
        src={`${WEATHER_ICON_URL}${todayData?.weather.icon}.png`}
        boxSize={200}
      />
      <Flex mt={8} alignItems="center">
        <Text fontSize="6xl">
          {todayData?.max_temp ? todayData.max_temp.toFixed(0) : "--"}
        </Text>
        <Text fontSize="2xl" color="GrayText" mt={5}>
          /{todayData?.low_temp ? todayData?.low_temp.toFixed(0) : "--"}
        </Text>
        <Text fontSize="2xl" ms={2}>
          ℃
        </Text>
      </Flex>
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
      <Text mt="auto" fontWeight="bold">
        {weatherForecast.sevenDayForecast?.city_name},{" "}
        {weatherForecast.sevenDayForecast?.country_code}
      </Text>
    </Box>
  );
};

export { Left };
