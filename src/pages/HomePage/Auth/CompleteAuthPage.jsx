import { Box, Image, Button, Container, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const CompleteAuthPage = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);

  // if (!inputs.email || inputs.password || inputs.username){
  //   console.log("The process is not completed")
  // }

  const handleSignup = async (inputs) => {
    navigate("/loginpage");
    if (!inputs.email || inputs.username || inputs.password) {
      console.log("ghe process is not completed");
      return;
    }
    try {
      // Create user with email and password
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        console.log(error);
        return;
      }

      if (newUser) {
        // Add user details to Firestore
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(), // Additional user data
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));

        // Navigate to login page or dashboard after successful registration
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container
        maxW={"390px"}
        align={"center"}
        justify={"center"}
        border={"1px solid gray"}
      >
        <Box border={"1ps solid gray"} padding={5}>
          <VStack spacing={4}>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />

            <p>Welcome to picspile, Mareigh.</p>

            <Button onClick={() => handleSignup()}>Complete SignUp</Button>
            <hr />
            <p>English[United Kingdom]</p>
          </VStack>
        </Box>
      </Container>
    </div>
  );
};

export default CompleteAuthPage;
