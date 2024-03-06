import React from "react";
import { Box, SkeletonCircle, Flex, SkeletonText } from "@chakra-ui/react";

const Progress = () => {
  return (
    <div>
      <Box
        padding="6"
        boxShadow="lg"
        marginTop="10px"
        borderRadius="lg"
        bg="white"
      >
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
};

export default Progress;
