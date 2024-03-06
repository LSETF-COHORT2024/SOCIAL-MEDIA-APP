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
  IconButton,
  VStack,
  Box,
  Link,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RiQuestionLine } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { VscColorMode } from "react-icons/vsc";
import { PiLockBold } from "react-icons/pi";
import { CgMoreVerticalR } from "react-icons/cg";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";

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
          <DrawerHeader borderBottomWidth="1px">
            <IconButton
              variant="ghost"
              colorScheme="Gray.900"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<Icon as={IoMdArrowRoundBack} />}
            />
            Settings
          </DrawerHeader>
          <DrawerBody>
            <Container justifyContent="flex-start">
              <VStack align="start">
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={GoPeople} marginRight="2" />
                  Follow and invite friends
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={FaRegBell} marginRight="2" />
                  Notifications
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={PiLockBold} marginRight="2" />
                  Privacy
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={LuShield} marginRight="2" />
                  Security
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={CgMoreVerticalR} marginRight="2" />
                  Ads
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={CgProfile} marginRight="2" /> Accounts
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <icon as={RiQuestionLine} marginRight="2" />
                  <Icon as={RxQuestionMarkCircled} marginRight="2" />
                  Helps
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={HiOutlineInformationCircle} marginRight="2" /> About
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Icon as={VscColorMode} marginRight="2" />
                  Theme
                </Button>
              </VStack>
              <VStack alignItems="start">
                <Text fontWeight="bold">Logins</Text>
                <Button colorScheme="Gray.900" variant="ghost">
                  Add or switch accounts
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Link to={"/loginpage"} as={RouterLink} cursor={"pointer"}>
                    Log out Profile Name
                  </Link>
                </Button>
                <Button colorScheme="Gray.900" variant="ghost">
                  <Link to={"/loginpage"} as={RouterLink} cursor={"pointer"}>
                    Log out all accounts
                  </Link>
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
