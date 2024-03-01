import { Box, Image, Input, Button, Container, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const AuthPasswordForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ Password: "" });

  const handlePassword = () => {
    if (!inputs.Password) {
      alert("Please fill all the fields");
    }
    navigate("/completeauth");
  };
  return (
    <div>
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

              <h1>Create a password</h1>
              <p>For security, your password must be 6 characters or more.</p>
              <Input
                placeholder="Password"
                fontSize={14}
                type="password"
                value={inputs.Password}
                onChange={(e) =>
                  setInputs({ ...inputs, Password: e.target.value })
                }
              />
              <Button
                w={"full"}
                bgGradient="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
                color="white"
                _hover={{
                  bgGradient:
                    "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))",
                }}
                onClick={handlePassword}
              >
                Next
              </Button>
              <hr />
              <p>English[United Kingdom]</p>
            </VStack>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default AuthPasswordForm;
