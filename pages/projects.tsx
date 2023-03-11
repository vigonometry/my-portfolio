import {
  Heading,
  VStack,
  Grid,
  GridItem,
  useColorMode,
  Stack,
  Center,
} from "@chakra-ui/react";
import { projectsList } from "../components/card/projectsList";
import { CardProps, ProjectCard } from "../components/card/ProjectCard";
export default function Projects() {
  const { colorMode } = useColorMode();
  return (
    <VStack p={8} spacing={8}>
      <Heading
        as="h2"
        textColor={colorMode == "light" ? "#0D1B1E" : "#FFFFFF"}
        fontWeight="bold"
        fontSize={{ lg: "5xl", base: "3xl" }}
      >
        My Projects
      </Heading>
      <Center>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, fr)" }}
          gap={6}
        >
          {projectsList.map((p: CardProps) => (
            <GridItem>
              <ProjectCard {...p} />
            </GridItem>
          ))}
        </Grid>
      </Center>
    </VStack>
  );
}
