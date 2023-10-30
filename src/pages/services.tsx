import { Box, Container, Heading, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";

import Header from "@/components/header."; 
import Footer from "../components/footer";

function Services() {
  return (
    <>
      <Header />
      <Box bg="teal.100" p={8}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Nos Services de Décoration d'Intérieur
          </Heading>
          <Box mb={8}>
            <Image
              src="/images/conception-espace.jpeg"
              alt="Conception de l'espace"
              w="100%"
              maxH="400px"
              mb={4}
            />
            <Heading as="h3" size="lg" mb={4}>
              Conception de l'espace
            </Heading>
            <Text fontSize="lg" mb={4}>
              Nous concevons des espaces uniques qui reflètent votre style et vos besoins.
            </Text>
          </Box>
          <Box mb={8}>
            <Image
              src="/images/selection-mobilier.jpg"
              alt="Sélection de mobilier et d'accessoires"
              w="100%"
              maxH="400px"
              mb={4}
            />
            <Heading as="h3" size="lg" mb={4}>
              Sélection de mobilier et d'accessoires
            </Heading>
            <Text fontSize="lg" mb={4}>
              Nous vous aidons à choisir les pièces parfaites pour votre intérieur.
            </Text>
          </Box>
          <Box mb={8}>
            <Image
              src="/images/choix couleurt.jpeg"
              alt="Choix de couleurs et de textiles"
              w="100%"
              maxH="400px"
              mb={4}
            />
            <Heading as="h3" size="lg" mb={4}>
              Choix de couleurs et de textiles
            </Heading>
            <Text fontSize="lg" mb={4}>
              Nous créons des palettes de couleurs harmonieuses et sélectionnons des tissus de qualité.
            </Text>
          </Box>
          <Link href="/">
            <Button colorScheme="teal" size="lg">
              Retour à la page d'accueil
            </Button>
          </Link>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Services;
