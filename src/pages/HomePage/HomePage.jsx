import Homepage_header from "../../Components/Header/Homepage_header";
import { Container, Box } from "@chakra-ui/layout";
import Avatars from "../../Components/Avatars";
import Feedposts from "../../Components/Feedposts/Feedposts";

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
