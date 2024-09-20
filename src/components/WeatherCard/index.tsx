import { Card, CardProps, Flex, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { WEATHER_ICON_URL } from "src/utils/constants";

interface Props extends CardProps {
  description?: string;
  temp?: number;
  icon?: string;
  valid_date?: Date;
}

const WeatherCard: FC<Props> = memo((props) => {
  const { description, temp, icon, valid_date, ...otherProps } = props;
  return (
    <Card
      flexDir="column"
      paddingInline={4}
      paddingBlock={2}
      w={[32, 40, 40, 40]}
      {...otherProps}
    >
      <Flex justifyContent="space-between">
        <Image src={`${WEATHER_ICON_URL}${icon}.png`} boxSize={12} />
        <Flex flexDir="column" alignItems="center">
          <Text fontSize="sm" fontWeight="600">
            {temp ? temp : "--"} ℃
          </Text>
          <Text
            fontSize={["xs", "xs", "xs", "xs"]}
            color="GrayText"
            fontWeight="600"
          >
            {valid_date?.toLocaleDateString("en-us", {
              day: "2-digit",
              month: "2-digit",
            })}
          </Text>
        </Flex>
      </Flex>
      <Text fontSize={["xs", "xs", "sm", "sm"]} fontWeight="600" noOfLines={1}>
        {description}
      </Text>
    </Card>
  );
});

export { WeatherCard };
