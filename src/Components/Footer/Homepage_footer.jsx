import { Flex, Box, Link, Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { LuGlobe } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";
const Homepage_footer = () => {
  return (
    <Box as="footer" position="fixed" bottom="0">
      <Flex
        alignItems={"center"}
        p={4}
        justifyContent={"space-between"}
        gap={10}
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
