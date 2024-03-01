import React from "react";
import PicsDrawer from "./PicsDrawer";
import {
  Container,
  Flex,
  IconButton,
  Text,
  Box,
  Stack,
  Icon,
  Avatar,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { PiPencilSimple } from "react-icons/pi";

const ProfileDropDown = () => {
  return (
    <div>
      <Container maxw="390px" bgColor="white" borderRadius="2xl">
        <Box padding="10px">
          <Flex justifyContent="space-between">
            <Box
              maxW="130px"
              border="1px"
              borderRadius="md"
              boxShadow="md"
              px="10px"
            >
              <Flex justifyContent="center" alignItems="center" gx="3px">
                <Text>profile.name</Text>
                <IconButton
                  isSuqare={true}
                  variant="solid"
                  aria-label="Done"
                  fontSize="20px"
                  bgColor="white"
                  icon={<ChevronDownIcon color="Gray.900" />}
                />
              </Flex>
            </Box>

            <PicsDrawer />
          </Flex>

          <Stack>
            <Box position="relative" display="inline-block">
              <Flex justifyContent="center">
                <Avatar name="Profile Picture" size="2xl" />

                <IconButton
                  isRound={true}
                  position="absolute"
                  bottom="0"
                  right="100"
                  size="sm"
                  variant="solid"
                  border="2px"
                  borderColor=" white"
                  bgGradient="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<Icon as={PiPencilSimple} color="white" />}
                />
              </Flex>
            </Box>
          </Stack>
          <Flex justifyContent="center" alignItems="center" padding="10px">
            <Heading>Profile Name</Heading>{" "}
            <IconButton
              isRound={true}
              size="sm"
              variant="solid"
              aria-label="Done"
              bgColor="white"
              fontSize="20px"
              icon={<Icon as={PiPencilSimple} color="Gray.900" />}
            />
          </Flex>
          <Box>
            <Flex justifyContent="center">
              <Text>Hobby | Work | Role</Text>
            </Flex>
            <Flex justifyContent="center">
              <Text>profile.name@email.com</Text>
            </Flex>
            {/* <Flex justifyContent="center" py="10px">
              <Text>www.profilename.com</Text>
            </Flex> */}
            <Flex justifyContent="center" py="10px">
              <Text color="blue">www.profilename.com</Text>
            </Flex>
            <Flex justifyContent="space-around">
              <VStack>
                <Heading>33</Heading>
                <Text>Posts</Text>
              </VStack>
              <VStack>
                <Heading>743</Heading>
                <Text>Followers</Text>
              </VStack>
              <VStack>
                <Heading>1,041</Heading>
                <Text>Following</Text>
              </VStack>
            </Flex>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ProfileDropDown;
