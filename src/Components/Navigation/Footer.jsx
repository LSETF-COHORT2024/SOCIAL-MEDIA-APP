import { Flex, IconButton, Icon, Container, Box } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { CgGlobeAlt } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

// const gradient = "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))";
function Footer() {
  return (
    <>
      <Container maxW="390px" height={"80px"}>
        <Box maxW="sm" borderWidth="1px" borderRadius="xl" bg="white">
          <Flex justifyContent={"space-around"} p={"10px"}>
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
              aria-label="Done"
              fontSize="20px"
              icon={<Icon as={GrHomeRounded} color="gray.800" />}
            />

            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="white"
              aria-label="Done"
              fontSize="20px"
              icon={<Icon as={CgGlobeAlt} color="gray.800" />}
            />

            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="white"
              aria-label="Done"
              fontSize="20px"
              bgGradient={
                "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
              }
              icon={<Icon as={IoMdAdd} color="white" />}
            />
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="white"
              aria-label="Done"
              fontSize="20px"
              icon={<Icon as={FaRegHeart} color="gray.800" />}
            />
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="white"
              aria-label="Done"
              fontSize="20px"
              icon={<Icon as={RxAvatar} color="gray.800" />}
            />
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default Footer;
