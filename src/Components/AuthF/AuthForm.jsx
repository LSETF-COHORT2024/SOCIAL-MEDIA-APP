// import React from "react";
import { useState } from "react";
import {
  Box,
  Image,
  Input,
  Button,
  Container,
  VStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    Username: "",
  });
  const handleAuth = () => {
    if (!inputs.Username) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/authpasswordpage");
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

            <h1>Choose Username</h1>
            <p>You can always do it later</p>

            <form onSubmit={() => {}}>
              <FormControl isInvalid={false}>
                <Input
                  placeholder="Email"
                  fontSize={14}
                  type="email"
                  value={inputs.Username}
                  onChange={(e) =>
                    setInputs({ ...inputs, Username: e.target.value })
                  }
                />
                <FormErrorMessage>The E-mail is not valid</FormErrorMessage>
              </FormControl>
            </form>
            <Button
              isLoading={false}
              loadingText="Next"
              width={"full"}
              type="submit"
              onClick={handleAuth}
            >
              Next
            </Button>
            <hr />
            <p>English[United Kingdom]</p>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default AuthForm;
