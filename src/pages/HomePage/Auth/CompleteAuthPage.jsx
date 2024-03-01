import { Box, Image, Button, Container, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CompleteAuthPage = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/loginpage");
  };

  return (
    <div>
      <Container
        maxW={"390px"}
        align={"center"}
        justify={"center"}
        border={"1px solid gray"}
      >
        <Box border={"1ps solid gray"} padding={5}>
          <VStack spacing={4}>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />

            <p>Welcome to picspile,{}.</p>

            <Button
              w={"full"}
              bgGradient="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
              color="white"
              _hover={{
                bgGradient:
                  "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))",
              }}
              onClick={handleSignup}
            >
              Complete SignUp
            </Button>
            <hr />
            <p>English[United Kingdom]</p>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default CompleteAuthPage;
