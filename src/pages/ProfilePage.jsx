import React from "react";
import { Container } from "@chakra-ui/react";
// import ProfileCard from "../Components/ProfileCard";
import ProfileDropDown from "../Components/Drawers/ProfileDropDown";

const ProfilePage = () => {
  return (
    <div>
      <Container>
        ProfilePage
        {/* <ProfileCard /> */}
        <ProfileDropDown />
      </Container>
    </div>
  );
};

export default ProfilePage;
