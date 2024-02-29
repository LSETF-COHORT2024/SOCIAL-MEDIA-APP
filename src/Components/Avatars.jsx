import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";

const Avatars = () => {
  return (
    <div>
      <Flex justifyContent={"space-between"}>
        <Link>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
                size={"md"}
              />
            </WrapItem>
          </Wrap>
        </Link>

        <Link>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
                size={"md"}
              />
            </WrapItem>
          </Wrap>
        </Link>

        <Link>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
                size={"md"}
              />
            </WrapItem>
          </Wrap>
        </Link>

        <Link>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Christian Nwamba"
                size={"md"}
                src="https://bit.ly/code-beast"
              />
            </WrapItem>
          </Wrap>
        </Link>

        <Link>
          <Wrap>
            <WrapItem>
              <Avatar
                size={"md"}
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
            </WrapItem>
          </Wrap>
        </Link>
      </Flex>
    </div>
  );
};

export default Avatars;
