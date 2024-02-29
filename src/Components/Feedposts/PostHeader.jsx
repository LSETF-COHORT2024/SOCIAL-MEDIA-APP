import { Avatar, Box, Flex, VStack, Text, transition } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PiDotsThreeVertical } from "react-icons/pi";

const PostHeader = () => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        <Flex alignItems={"center"} gap={2}>
          <Avatar src="https://bit.ly/kent-c-dodds" alt="user profile pic" />
          <VStack fontSize={12} fontWeight={"bold"}>
            <Text>David William</Text>
            <Text>3h,Los Angeles</Text>
          </VStack>
        </Flex>
        <Box paddingRight={3}>
          <Flex
            gap={2}
            _hover={{ color: "#f4f8fb" }}
            transition={"0.2s ease-in-out"}
          >
            <Link>
              <AiOutlineDelete />
            </Link>
            <Link>
              <PiDotsThreeVertical />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default PostHeader;
