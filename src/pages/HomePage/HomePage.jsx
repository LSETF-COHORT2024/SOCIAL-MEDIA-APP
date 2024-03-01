import React from "react";

const Homepage = () => {
  return (
    <Container bg={"#f4f8fb"}>
      <Box>
        <Homepage_header />
      </Box>

      <Avatars />

      <Feedposts />
    </Container>
  );
};

export default Homepage;
