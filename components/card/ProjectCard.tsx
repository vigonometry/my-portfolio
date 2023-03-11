import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsGithub, BsYoutube } from "react-icons/bs";

export type CardProps = {
  imgSrc: string;
  heading: string;
  body: string;
  ghLink: string;
  ytLink: string;
};
export const ProjectCard = (c: CardProps) => {
  return (
    <Card maxW={{lg: "sm", base: "xs"}} h={{lg: "lg", base: "md"}}>
      <CardBody>
        <Img
          src={c.imgSrc}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{c.heading}</Heading>
          <Text fontWeight="normal">
            {c.body}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <IconButton aria-label="github" icon={<BsGithub />} as={Link} href={c.ghLink} />
          <IconButton aria-label="youtube" icon={<BsYoutube />} as={Link} href={c.ytLink} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
