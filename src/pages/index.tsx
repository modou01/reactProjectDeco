import { Box, Container, Heading, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";

import Header from "../components/header.";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <Box bg="teal.100" p={8}>
        <Container maxW="container.lg">
          <Image
            src="/images/alain-terrieur.jpg"
            alt="Alain TERRIEUR"
            w="100%"
            maxH="400px"
            mb={4}
          />
          <Heading as="h2" size="xl" mb={4}>
            Transformez vos espaces avec Alain TERRIEUR
          </Heading>
          <Text fontSize="lg" mb={8}>
            L'art de la décoration intérieure à son meilleur. Chez Alain TERRIEUR, nous créons des designs uniques pour chaque client, en transformant vos espaces en lieux de rêve.
          </Text>

         
          <Link href="/services">
            <Button colorScheme="teal" size="lg">
              Découvrez Nos Services
            </Button>
          </Link>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
