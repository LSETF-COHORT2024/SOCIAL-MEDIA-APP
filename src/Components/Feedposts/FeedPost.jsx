import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
const FeedPost = ({ img, username, avatar, comments, location }) => {
  return (
    <Box bg={"white"} borderRadius={30}>
      <PostHeader username={username} avatar={avatar} location={location} />
      <Box>
        <Image
          src={img}
          alt={username}
          borderRadius={40}
          overflow={"hidden"}
          paddingBottom={5}
          paddingLeft={5}
          paddingRight={5}
        />
      </Box>
      <PostFooter comments={comments} />
    </Box>
  );
};

export default FeedPost;
