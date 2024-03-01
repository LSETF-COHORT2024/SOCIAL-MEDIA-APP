import { Container, Box } from "@chakra-ui/react";
import Homepage_footer from "../../Components/Footer/Homepage_footer";
import Homepage_header from "../../Components/Header/Homepage_header";
// import Homepage from "./HomePage";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Container maxW={"390px"}>
      <Box>{children}</Box>

      {pathname !== "/auth" &&
        pathname !== "/authpasswordpage" &&
        pathname !== "/completeauth" &&
        pathname !== "/loginpage" && (
          <Box height={"80px"} as="footer" position="fixed" bottom="0">
            <Homepage_footer />
          </Box>
        )}
    </Container>
  );
};

export default Layout;
