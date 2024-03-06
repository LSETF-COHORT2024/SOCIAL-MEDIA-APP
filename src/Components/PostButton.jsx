import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";

import { IoMdAdd } from "react-icons/io";

function PostButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        isRound={true}
        ref={btnRef}
        onClick={onOpen}
        variant="solid"
        colorScheme="white"
        aria-label="Done"
        fontSize="20px"
        bgGradient={
          "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
        }
      >
        <Icon as={IoMdAdd} color="white" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody maxW="fitcontent">
            <p>Post</p>
            <p>Reels</p>
            <p>Story</p>
            <p>Live</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default PostButton;
