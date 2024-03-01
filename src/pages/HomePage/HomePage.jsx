import React from "react";
import { Container, Box } from "@chakra-ui/layout";
import Avatars from "/Users/Latitude E5450/Desktop/picspile/src/Components/Avatars";
import Feedposts from "/Users/Latitude E5450/Desktop/picspile/src/Components/Feedposts/Feedposts";
import Homepage_header from "../../Components/Header/Homepage_header";

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
