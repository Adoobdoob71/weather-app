import {
  Flex,
  FlexProps,
  HStack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

interface Props extends FlexProps {
  leftElement?: ReactNode;
}

const Header: FC<Props> = memo((props) => {
  const { leftElement, ...otherProps } = props;
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      paddingBlock={8}
      paddingInline={8}
      justifyContent="space-between"
      alignItems="center"
      {...otherProps}
    >
      {leftElement}
      <HStack ms="auto">
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        <Switch
          colorScheme="yellow"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
          ms="1em"
        />
      </HStack>
    </Flex>
  );
});

export { Header };
