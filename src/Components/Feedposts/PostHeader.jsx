import { Avatar, Box, Flex, VStack, Text, transition } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PiDotsThreeVertical } from "react-icons/pi";

const PostHeader = ({ username, avatar, location }) => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        <Flex alignItems={"center"} gap={2} p="10px">
          <Avatar src={avatar} alt={username} size="sm" />
          <VStack align="start" spacing="0">
            <Text fontSize={12} fontWeight={"bold"}>
              {username}
            </Text>
            <Text fontSize={10} fontWeight={"normal"}>
              {location}
            </Text>
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
