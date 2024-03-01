import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";
import { Flex } from "@chakra-ui/react";

const Homepage_header = () => {
  return (
    <header>
      <Flex align={"center"} justifyContent={"space-between"} p={4}>
        <TiSocialInstagramCircular size={50} />
        <img
          src="https://res.cloudinary.com/dciu77c43/image/upload/v1708776698/Top_spn9my.png"
          alt=""
        />
        <AiOutlineMessage size={50} />
      </Flex>
    </header>
  );
};

export default Homepage_header;
