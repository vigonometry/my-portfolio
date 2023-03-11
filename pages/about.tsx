import {
  Heading,
  Link,
  HStack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorMode,
  Stack,
  Img,
  Spacer,
} from "@chakra-ui/react";
export default function About() {
  const { colorMode } = useColorMode();
  return (
    <Stack
      flexDir={{ lg: "row", base: "column" }}
      p={8}
      align="center"
      justifyContent="center"
      justifyItems="center"
    >
      <VStack
        p={4}
        align={{ lg: "baseline", base: "center" }}
        spacing={8}
        maxWidth={{ lg: "60%", base: "100%" }}
      >
        <Heading
          as="h2"
          textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
          fontWeight="bold"
          fontSize={{ lg: "5xl", base: "3xl" }}
          textAlign={{ lg: "left", base: "center" }}
        >
          About Me
        </Heading>
        <Text
          textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
          fontWeight="normal"
          fontSize={{ lg: "xl", base: "lg" }}
          textAlign={{ lg: "left", base: "center" }}
        >
          Hi, I’m Vigneshwar, a Computer Science and Quant Finance sophomore at
          NUS, specialising in AI, Machine Learning and Algorithms.
        </Text>
        <Text
          textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
          fontWeight="normal"
          fontSize={{ lg: "xl", base: "lg" }}
          textAlign={{ lg: "left", base: "center" }}
        >
          As of today, I’ve had the pleasure of creating blockchain projects
          that have gained{" "}
          <Link
            textColor="messenger.500"
            href="https://www.linkedin.com/posts/vigneshwar-hariharan_fintech-blockchain-nfts-activity-6980366633903042560-r_UZ?utm_source=share&utm_medium=member_desktop"
          >
            international traction
          </Link>
          , prototyped{" "}
          <Link
            textColor="messenger.500"
            href="https://www.linkedin.com/posts/vigneshwar-hariharan_im-beyond-ecstatic-to-announce-that-our-activity-6967009887704801280-6ZbR?utm_source=share&utm_medium=member_desktop"
          >
            medical technology
          </Link>{" "}
          targeted at rural regions and have led numerous extracurricular
          activities on campus.
        </Text>
        <Text
          textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
          fontWeight="normal"
          fontSize={{ lg: "xl", base: "lg" }}
          textAlign={{ lg: "left", base: "center" }}
        >
          I also recently began my teaching journey as an Undergraduate Teaching
          Assistant at the NUS School of Computing, where I mentor students on
          programming methodology fundamentals using C.
        </Text>
        <Text
          textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
          fontWeight="normal"
          fontSize={{ lg: "xl", base: "lg" }}
          textAlign={{ lg: "left", base: "center" }}
        >
          Here are a few technologies I’ve been working with recently:
        </Text>
        <HStack spacing="30%" justify="center" px={6}>
          <UnorderedList
            textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
            fontSize={{ lg: "xl", base: "lg" }}
            fontWeight="normal"
          >
            <ListItem>Python</ListItem>
            <ListItem>OpenCV</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>C</ListItem>
          </UnorderedList>
          <UnorderedList
            textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
            fontSize={{ lg: "xl", base: "lg" }}
            fontWeight="normal"
          >
            <ListItem>React</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>Solidity</ListItem>
          </UnorderedList>
        </HStack>
      </VStack>
      <Spacer />
      <Img
        src="/assets/Vignesh.png"
        maxWidth={{ md: "300px", lg: "400px", base: "200px" }}
        boxShadow="15px 15px #0d1b1e"
      />
    </Stack>
  );
}
