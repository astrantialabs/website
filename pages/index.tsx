import type { NextPage } from "next";
import Link from "next/link";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  LinkOverlay,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"98%"}
          >
            Astrantia Labs
          </Heading>
          <Text color={"gray.500"}>
           Astrantia Labs adalah sebuah komunitas pengembangan kecil yang berbasis di balikpapan, indonesia.
          </Text>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Button fontWeight={"light"}>
              <Link href="https://github.com/astrantialabs" passHref>
                <LinkOverlay>GitHub Organization</LinkOverlay>
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
