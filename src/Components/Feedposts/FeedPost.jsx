import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
const FeedPost = () => {
  return (
    <Box bg={"white"} borderRadius={30}>
      <PostHeader />
      <Box>
        <Image
          src="https://res.cloudinary.com/dciu77c43/image/upload/v1702477498/cld-sample-5.jpg"
          alt="Userpost"
          borderRadius={40}
          paddingBottom={5}
          paddingLeft={5}
          paddingRight={5}
        />
      </Box>
      <PostFooter />
    </Box>
  );
};

export default FeedPost;
