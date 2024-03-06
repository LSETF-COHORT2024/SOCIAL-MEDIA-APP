import React from "react";
import { Container } from "@chakra-ui/react";
// import ProfileCard from "../Components/ProfileCard";
import ProfileDropDown from "../Components/Drawers/ProfileDropDown";
import Progress from "../Components/Progress Components/Progress";

const ProfilePage = () => {
  return (
    <div>
      {/* <ProfileCard /> */}
      <Container marginTop="20px">
        <ProfileDropDown />
      </Container>
      <Progress />
      <Progress />
      <Progress />
      <Progress />
      <Progress />
    </div>
  );
};

export default ProfilePage;
