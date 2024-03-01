import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
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
          rightIcon={<ChevronDownIcon />}
        ></MenuButton>
        <MenuList>
          <MenuItem>
            <Icon as={MdOutlineSwitchAccount} marginRight="2" />
            Switch Account
          </MenuItem>
          <MenuItem>
            <Icon as={TbLogout} marginRight="2" /> Create a Copy
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropDown;
