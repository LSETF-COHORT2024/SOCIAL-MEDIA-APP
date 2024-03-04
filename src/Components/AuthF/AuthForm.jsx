import { useState } from "react";
import {
  Box,
  Image,
  Input,
  Button,
  Container,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/authpasswordpage", { inputs });
  };

  // Function to find similar usernames
  const findSimilarUsernames = (username) => {
    // Dummy implementation, replace with actual logic to find similar usernames
    return ["Mareigh", "mareigh2", "mareigh3"];
  };

  // Function to check if username is "mareighh"
  const isInvalidUsername = (username) => {
    return username === "mareighh";
  };

  return (
    <div>
      <Container
        maxW={"390px"}
        align={"center"}
        justify={"center"}
        border={"1px solid gray"}
      >
        <Box padding={5}>
          <VStack spacing={4}>
            <Image
              src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png"
              alt="member"
            />
            <h1>Choose Username</h1>
            <p>You can always do it later</p>

            <form onSubmit={handleSubmit}>
              <FormControl
                py={2}
                isInvalid={isInvalidUsername(inputs.username)}
              >
                <Input
                  placeholder="Username"
                  fontSize={14}
                  type="text"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
                <FormErrorMessage>
                  {isInvalidUsername(inputs.username) && (
                    <>This username is not available.</>
                  )}
                </FormErrorMessage>
                <Menu>
                  <MenuButton as={Button} mt={2} size="sm">
                    Suggestions
                  </MenuButton>
                  <MenuList>
                    {findSimilarUsernames(inputs.username).map(
                      (similarUsername, index) => (
                        <MenuItem
                          key={index}
                          onClick={() =>
                            setInputs({ ...inputs, username: similarUsername })
                          }
                        >
                          {similarUsername}
                        </MenuItem>
                      )
                    )}
                  </MenuList>
                </Menu>
              </FormControl>
              <Button type="submit">Next</Button>
            </form>
            <hr />
            <p>English[United Kingdom]</p>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default AuthForm;
