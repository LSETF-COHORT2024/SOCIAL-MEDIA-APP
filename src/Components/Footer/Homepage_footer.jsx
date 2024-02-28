import { Flex } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { LuGlobe } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";

const Homepage_footer = () => {
  return (
    <>
      <Flex alignItems={"center"} p={4} justifyContent={"space-between"}>
        <GrHomeRounded size={30} />
        <LuGlobe size={40} />
        <img
          src="https://res.cloudinary.com/dciu77c43/image/upload/v1708963697/Add_Plus_Circle_rkppm2.png"
          alt=""
        />
        <GoHeart size={40} />
        <CgProfile size={40} />
      </Flex>
    </>
  );
};

export default Homepage_footer;
