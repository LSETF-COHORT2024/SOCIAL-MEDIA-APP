import React from "react";
import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Text,
  Heading,
  CardBody,
  CardFooter,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { MdOutlineComment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const ProfileCard = () => {
  return (
    <div>
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<Icon as={GiHamburgerMenu} />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<Icon as={SlLike} />}>
            Like
          </Button>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<Icon as={MdOutlineComment} />}
          >
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<Icon as={FaShare} />}>
            Share
          </Button>
        </CardFooter>
      </Card>

      {/* <Containener>

      </Containener> */}
    </div>
  );
};

export default ProfileCard;
