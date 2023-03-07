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
    Grid,
    GridItem,
    Box,
  } from "@chakra-ui/react";
  import Head from "next/head";
  import Image from "next/image";
  import styles from "../styles/Home.module.css";
  import { projectsList }  from "../components/card/projectsList";
  import { CardProps, ProjectCard } from "../components/card/ProjectCard";
  export default function About() {
    return (
      <div className={styles.container}>
        <VStack p={4} align="center" spacing={8} w="full">
          <Heading
            as="h2"
            textColor="#0D1B1E"
            fontWeight="bold"
            fontSize={{ md: "5xl", base: "3xl" }}
          >
            My Projects
          </Heading>
          <Grid templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, fr)"}} gap={6}>
            {projectsList.map((p: CardProps) => (
                <GridItem>
                    {ProjectCard(p)}
                </GridItem>
            ))}
          </Grid>
        </VStack>
      </div>
    );
  }
  