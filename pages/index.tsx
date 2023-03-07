import { Button, Heading, Link, HStack, Img, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Stack flexDir={{lg: "row", base:"column"}} p={4} align="center" justifyContent="center" justifyItems="center">
        <VStack p={4} align={{md: "baseline", base:"center"}} spacing={8}>
          <Heading as="h1" textColor="#0D1B1E" fontWeight="bold" fontSize={{md: '5xl', base: '3xl'}} textAlign={{md: 'left', base: 'center'}}>
           Vigneshwar H.
          </Heading>
          <Text textColor="#0D1B1E" fontWeight="normal" fontSize={{md: 'xl', base:'lg'}} textAlign={{md: 'left', base: 'center'}} w="60%">
            I’m a <u><b>CS and Quant Finance Undergrad</b></u> @ the National University of Singapore specialising in <b>AI/ML and Algorithms</b>.
          </Text>
          <br/><br/>
          <Button variant="outline" size={{md: "xl", base: "lg"}} textColor="#0D1B1E" fontSize={{md: 'xl', base:'lg'}} textAlign={{md: 'left', base: 'center'}} as={NextLink} href="/projects" p={4} borderColor="#0D1B1E">
            Check out my projects
          </Button>
        </VStack>
        <Img src="/assets/Vignesh.png" display={{md: "inline", base:"none"}} boxShadow="15px 15px #0d1b1e"/>
      </Stack>

    </div>
  )
}
