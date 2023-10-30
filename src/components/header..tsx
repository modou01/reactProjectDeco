import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Heading as="h1" fontSize="3xl">
        Bienvenue chez Alain TERRIEUR
      </Heading>
      <Text fontSize="lg" mt={2}>
        Expert en Décoration d'Intérieur
      </Text>
    </Box>
  );
}

export default Header;
