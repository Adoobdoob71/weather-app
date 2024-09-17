import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";
import { FC, memo } from "react";

interface Props extends IconProps {
  d: string;
}

const Icon: FC<Props> = memo((props) => {
  return (
    <ChakraIcon {...props} viewBox="0 0 500 500">
      <path d={props.d} fill="currentColor" />
    </ChakraIcon>
  );
});

export { Icon };
