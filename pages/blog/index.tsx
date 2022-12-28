import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function blog() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Container maxW="container.xl">
          <Heading>Blog</Heading>
        </Container>
      </main>
    </>
  );
}
