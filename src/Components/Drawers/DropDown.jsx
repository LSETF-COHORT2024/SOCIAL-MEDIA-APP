import React from "react";
import {
  Menu,
  MenuButton,
  Link,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Icon, ChevronDownIcon } from "@chakra-ui/icons";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const DropDown = () => {
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          bgColor="white"
          fontSize="12"
          leftIcon={<ChevronDownIcon fontSize="10" />}
        ></MenuButton>
        <MenuList>
          <MenuItem>
            <Icon as={MdOutlineSwitchAccount} marginRight="2" />
            Add/Switch Account
          </MenuItem>
          <MenuItem>
            <Link to={"/loginpage"} as={RouterLink} cursor={"pointer"}>
              <Icon as={TbLogout} marginRight="2" /> Logout
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropDown;
