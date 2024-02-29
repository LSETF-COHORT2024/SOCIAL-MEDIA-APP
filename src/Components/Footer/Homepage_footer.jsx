import { Flex, Box, Link, Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { LuGlobe } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";
const Homepage_footer = () => {
  return (
    <Box
      maxW={"sm"}
      borderWidth={"1px"}
      borderRadius={"xl"}
      bg={"white"}
      as="footer"
      position="fixed"
      bottom="0"
      // w={"full"}
    >
      <Flex
        alignItems={"center"}
        gap={7}
        p={4}
        justifyContent={"space-between"}
      >
        <Link
          to={"/"}
          as={RouterLink}
          cursor={"pointer"}
          _hover={{
            color: "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))",
          }}
        >
          <GrHomeRounded size={30} />
        </Link>
        <Link to={"/SearchPage"} as={RouterLink} cursor={"pointer"}>
          <LuGlobe size={40} />
        </Link>

        <img
          src="https://res.cloudinary.com/dciu77c43/image/upload/v1708963697/Add_Plus_Circle_rkppm2.png"
          alt=""
        />

        <Link to={"/NotificationPage"} as={RouterLink} cursor={"pointer"}>
          <GoHeart size={40} />
        </Link>
        <Link to={"/ProfilePage"} as={RouterLink} cursor={"pointer"}>
          <Wrap>
            <WrapItem>
              <Avatar
                size={"md"}
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
            </WrapItem>
          </Wrap>
        </Link>
      </Flex>
    </Box>
  );
};

export default Homepage_footer;

// import { Flex, IconButton, Icon, Container, Box } from "@chakra-ui/react";
// import { GrHomeRounded } from "react-icons/gr";
// import { CgGlobeAlt } from "react-icons/cg";
// import { IoMdAdd } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";

// // const gradient = "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))";
// const Homepage_footer = () => {
//   return (
//     <Container maxW="390px">
//       <Box maxW="sm" borderWidth="1px" borderRadius="xl" bg="white">
//         <Flex justifyContent={"space-around"} p={"10px"}>
//           <IconButton
//             isRound={true}
//             variant="solid"
//             colorScheme="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
//             aria-label="Done"
//             fontSize="20px"
//             icon={<Icon as={GrHomeRounded} color="gray.800" />}
//           />

//           <IconButton
//             isRound={true}
//             variant="solid"
//             colorScheme="white"
//             aria-label="Done"
//             fontSize="20px"
//             icon={<Icon as={CgGlobeAlt} color="gray.800" />}
//           />

//           <IconButton
//             isRound={true}
//             variant="solid"
//             colorScheme="white"
//             aria-label="Done"
//             fontSize="20px"
//             bgGradient={
//               "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
//             }
//             icon={<Icon as={IoMdAdd} color="white" />}
//           />
//           <IconButton
//             isRound={true}
//             variant="solid"
//             colorScheme="white"
//             aria-label="Done"
//             fontSize="20px"
//             icon={<Icon as={FaRegHeart} color="gray.800" />}
//           />
//           <IconButton
//             isRound={true}
//             variant="solid"
//             colorScheme="white"
//             aria-label="Done"
//             fontSize="20px"
//             icon={<Icon as={RxAvatar} color="gray.800" />}
//           />
//         </Flex>
//       </Box>
//     </Container>
//   );
// };

// export default Homepage_footer;
