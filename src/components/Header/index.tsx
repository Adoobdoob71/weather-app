import { Flex, Switch, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { SCREEN_WIDTH } from "src/utils/constants";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface Props {}

const Header: FC<Props> = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      paddingBlock="2em"
      paddingInline="2rem"
      justifyContent="flex-end"
      alignItems="center"
    >
      {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      <Switch
        colorScheme="yellow"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        ms="1em"
      />
    </Flex>
  );
};

export { Header };
