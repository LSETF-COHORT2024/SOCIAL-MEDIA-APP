import { Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Flex
        alignItems={"center"}
        gap={4}
        w={"full"}
        marginBottom={2}
        pt={0}
        mt={"auto"}
      >
        <Box onClick={handleLike}>
          <FontAwesomeIcon
            icon={faHeart} // Use faHeart icon directly
            size="lg"
            style={{ color: liked ? "f4f8fb" : "#ff0163" }}
          />
        </Box>
        <span>{likes}</span> {/* Display likes count */}
      </Flex>
    </>
  );
};

export default PostFooter;
