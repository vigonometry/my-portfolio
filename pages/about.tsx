import {
  Button,
  Heading,
  Link,
  HStack,
  Img,
  Spacer,
  Stack,
  Text,
  VStack,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
export default function About() {
  return (
    <div className={styles.container}>
      <VStack p={4} align={{ md: "baseline", base: "center" }} spacing={8}>
        <Heading
          as="h2"
          textColor="#0D1B1E"
          fontWeight="bold"
          fontSize={{ md: "5xl", base: "3xl" }}
          textAlign={{ md: "left", base: "center" }}
        >
          About Me
        </Heading>
        <Text
          textColor="#0D1B1E"
          fontWeight="normal"
          fontSize={{ md: "xl", base: "lg" }}
          textAlign={{ md: "left", base: "center" }}
        >
          Hi, I’m Vigneshwar, a Computer Science and Quant Finance sophomore at
          NUS, specialising in AI, Machine Learning and Algorithms.
        </Text>
        <Text
          textColor="#0D1B1E"
          fontWeight="normal"
          fontSize={{ md: "xl", base: "lg" }}
          textAlign={{ md: "left", base: "center" }}
        >
          As of today, I’ve had the pleasure of creating blockchain projects
          that have gained <Link textColor="messenger.500" href="https://www.linkedin.com/posts/vigneshwar-hariharan_fintech-blockchain-nfts-activity-6980366633903042560-r_UZ?utm_source=share&utm_medium=member_desktop">international traction</Link>, prototyped <Link textColor="messenger.500" href="https://www.linkedin.com/posts/vigneshwar-hariharan_im-beyond-ecstatic-to-announce-that-our-activity-6967009887704801280-6ZbR?utm_source=share&utm_medium=member_desktop">medical technology</Link>{" "}
        targeted at rural regions and have led numerous extracurricular
          activities on campus.
        </Text>
        <Text
          textColor="#0D1B1E"
          fontWeight="normal"
          fontSize={{ md: "xl", base: "lg" }}
          textAlign={{ md: "left", base: "center" }}
        >
          I also recently began my teaching journey as an Undergraduate Teaching
          Assistant at the NUS School of Computing, where I mentor students on
          programming methodology fundamentals using C.
        </Text>
        <Text
          textColor="#0D1B1E"
          fontWeight="normal"
          fontSize={{ md: "xl", base: "lg" }}
          textAlign={{ md: "left", base: "center" }}
        >
          Here are a few technologies I’ve been working with recently:
        </Text>
        <HStack spacing="30%" justify="center" px={6}>
            <UnorderedList textColor="#0D1B1E" fontSize={{ md: "xl", base: "lg" }} fontWeight="normal">
                <ListItem>Python</ListItem>
                <ListItem>OpenCV</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>C</ListItem>
            </UnorderedList>
            <UnorderedList textColor="#0D1B1E" fontSize={{ md: "xl", base: "lg" }} fontWeight="normal">
                <ListItem>React</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>GraphQL</ListItem>
                <ListItem>Solidity</ListItem>
            </UnorderedList>
        </HStack>
        </VStack>
    </div>
  );
}
