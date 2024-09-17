import { Container } from "@chakra-ui/react";
import { FC } from "react";

interface Props {}

const Description: FC<Props> = () => {
  return (
    <Container mt={6} textAlign="center">
      I should put weather cards in big cities around the world here Lorem ipsum
      odor amet, consectetuer adipiscing elit. Odio venenatis fames eu faucibus;
      habitant porttitor. Amet felis aenean cras habitant, eu massa pellentesque
      tortor consectetur. Platea posuere ipsum laoreet est litora ipsum tempor
      commodo donec. Ridiculus eu congue aliquet torquent nullam dictum
      pellentesque.
    </Container>
  );
};

export { Description };
