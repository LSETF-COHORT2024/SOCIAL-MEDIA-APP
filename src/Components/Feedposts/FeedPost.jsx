import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({ img, username, avatar, comments, location }) => {
  return (
    <Box bg={"white"} borderRadius="3xl">
      <PostHeader username={username} avatar={avatar} location={location} />
      <Box>
        <Image
          src={img}
          alt={username}
          overflow={"hidden"}
          paddingBottom={5}
          paddingLeft={5}
          paddingRight={5}
          borderRadius="2xl"
        />
      </Box>
      <PostFooter comments={comments} />
    </Box>
  );
};

export default FeedPost;
