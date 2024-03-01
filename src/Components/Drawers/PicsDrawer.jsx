import React from "react";
import {
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Icon,
  VStack,
  Box,
  Container,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RiQuestionLine } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { VscColorMode } from "react-icons/vsc";

function PicsDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");

  return (
    <>
      <Button colorScheme="black" onClick={onOpen}>
        <Icon as={GiHamburgerMenu} color="Gray" />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Settings</DrawerHeader>
          <DrawerBody>
            <Container justifyContent="flex-start">
              <VStack align="start">
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={GoPeople} marginRight="2" />
                  Follow and invite friends
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  <Icon as={FaRegBell} />
                  Notifications
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  Privacy
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  <Icon as={LuShield} />
                  Security
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  Ads
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  <Icon as={CgProfile} /> Accounts
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  <icon as={RiQuestionLine} /> Helps
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  <Icon as={HiOutlineInformationCircle} /> About
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  <Icon as={VscColorMode} />
                  Theme
                </Button>
              </VStack>
            </Container>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PicsDrawer;
