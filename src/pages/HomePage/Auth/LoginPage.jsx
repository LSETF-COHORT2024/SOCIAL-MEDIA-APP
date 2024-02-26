import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Input,
  Button,
  Container,
  VStack,
} from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <div>
      <Container maxW="390px">
        <Box border={"1ps solid gray"} padding={5} spacing={4}>
          <VStack spacing={4}>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />
            <Input
              placeholder="Phone number, email address, username"
              type="text, email"
            />
            <Input placeholder="Password" type="password" />
            <Button
              w={"full"}
              bgGradient="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
              color="white"
              _hover={{
                bgGradient:
                  "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))",
              }}
            >
              Login
            </Button>
            <Text fontSize={12}>
              Forgotten your login details? Get help with logging in
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.700"} />
            <Text>OR</Text> <Box flex={2} h={"1px"} bg={"gray.700"} />
            <Flex>
              <Image
                src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708950718/picspile/icons8-google-48_mr0cb4.png"
                alt="Google"
              />
              <Image
                src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708950715/picspile/icons8-facebook-48_b7kxvt.png"
                alt="Facebook"
              />
            </Flex>
          </VStack>
          <hr />
          <VStack justifyContent={"center"} my={2}>
            <Text fontSize={10}>English[United Kingdom]</Text>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
