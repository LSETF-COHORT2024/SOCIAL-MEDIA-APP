import { Flex, Box, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaRegComment } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { IoIosAttach } from "react-icons/io";
import { Link } from "react-router-dom";
const PostFooter = ({ comments }) => {
  const [liked, setLiked] = useState(true);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes + 1);
    } else {
      setLiked(true);
      setLikes(likes - 1);
    }
  };

  return (
    <Box>
      <VStack>
        <Flex
          alignItems={"center"}
          gap={150}
          w={"full"}
          marginBottom={2}
          pt={0}
          mt={"auto"}
          paddingLeft={10}
        >
          <Box onClick={handleLike}>
            <Flex gap={4}>
              <FontAwesomeIcon
                icon={faHeart} // Use faHeart icon directly
                size="lg"
                style={{ color: liked ? "f4f8fb" : "#ff0163" }}
              />

              <FaRegComment size={20} />

              <LuSend size={20} />
            </Flex>
          </Box>
          <Box>
            <Link>
              <IoIosAttach />
            </Link>
          </Box>
        </Flex>

        <Text as={"span"}> {likes} likes</Text>

        <Text as={"span"} fontSize={"sm"} color={"gray"}>
          View all {comments} comments
        </Text>
      </VStack>
    </Box>
  );
};

export default PostFooter;
