import { Box, Card, CardProps, Flex, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { WEATHER_ICON_URL } from "src/utils/constants";

interface Props extends CardProps {
  city_name?: string;
  temp?: number;
  icon?: string;
  description?: string;
  country_code?: string;
}

const WeatherCard: FC<Props> = memo((props) => {
  return (
    <Card
      flexDir="column"
      alignItems="center"
      paddingInline={4}
      paddingBlock={2}
      w={[32, 32, 32, 40]}
      {...props}
    >
      <Image src={`${WEATHER_ICON_URL}${props.icon}.png`} boxSize={12} />
      <Text fontSize="md" fontWeight="bold">
        {props.temp}
      </Text>
      <Text
        fontSize={["xs", "xs", "sm", "sm"]}
        color="GrayText"
        fontWeight="bold"
        noOfLines={1}
      >
        {props.city_name}
      </Text>
    </Card>
  );
});

export { WeatherCard };
