import styles from "../styles/Home.module.css";
import {
  Button,
  Heading,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.container}>
      <VStack
        align={{ lg: "baseline", base: "center" }}
        spacing={8}
        p={4}
        pt="6rem"
        m={8}
      >
          <Heading
            as="h1"
            textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
            fontWeight="bold"
            fontSize={{ lg: "8xl", base: "5xl" }}
            textAlign={{ lg: "left", base: "center" }}
          >
            Vigneshwar Hariharan.
          </Heading>
          <Text
            textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
            fontWeight="normal"
            fontSize={{ lg: "3xl", base: "lg" }}
            textAlign={{ lg: "left", base: "center" }}
          >
            I’m a{" "}
            <u>
              <b>CS and Quant Finance Undergrad</b>
            </u>{" "}
            @ the National University of Singapore specialising in{" "}
            <b>AI/ML and Algorithms</b>.
          </Text>
          <br />
          <br />
          <Button
            variant="outline"
            size={{ lg: "xl", base: "lg" }}
            textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
            fontSize={{ lg: "xl", base: "lg" }}
            textAlign={{ lg: "left", base: "center" }}
            as={NextLink}
            href="#projects"
            p={4}
            borderColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
          >
            Check out my projects
          </Button>
      </VStack>
    </div>
  );
}
