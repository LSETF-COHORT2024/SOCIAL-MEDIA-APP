import React from "react";
import {
  Flex,
  IconButton,
  Icon,
  Container,
  Image,
  Box,
} from "@chakra-ui/react";
import { FaRegCircle } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Container maxW="390px" height={"80px"}>
        <Box maxW="sm" borderWidth="1px" borderRadius="xl" bg="white">
          <Flex justifyContent={"space-around"} p={"10px"}>
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
              aria-label="Done"
              fontSize="20px"
              icon={<Icon as={FaRegCircle} color="gray.800" />}
            />

            <Image
              src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png"
              maxW="80px"
              alt="Dan Abramov"
            />

            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
              aria-label="Done"
              fontSize="20px"
              icon={<Icon as={AiOutlineMessage} color="gray.800" />}
            />
          </Flex>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
