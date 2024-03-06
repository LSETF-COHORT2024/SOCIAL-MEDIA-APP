import React from "react";
import { Input, Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
const SearchInput = () => {
  return (
    <div>
      <Box marginTop="20px">
        <Stack color="gray.900">
          <InputGroup border="gray.900">
            <InputRightElement pointerEvents="none">
              <Search2Icon color="gray.900" />
            </InputRightElement>
            <Input
              type="search"
              placeholder="Search"
              borderRadius="3xl"
              color="Gray.900"
            />
          </InputGroup>
        </Stack>
      </Box>
    </div>
  );
};

export default SearchInput;
