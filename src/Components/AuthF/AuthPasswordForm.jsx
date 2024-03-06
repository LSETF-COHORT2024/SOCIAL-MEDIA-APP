// // import { useState } from "react";
// // import {
// //   Box,
// //   Image,
// //   Input,
// //   Button,
// //   Container,
// //   VStack,
// //   InputGroup,
// //   InputRightElement,
// // } from "@chakra-ui/react";
// // import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// // import useSignUpWithEmailAndPassword from "../../Hooks/useSignUpWithEmailAndPassword"; // Assuming correct path to the hook

// // const AuthPasswordForm = () => {
// //   const [inputs, setInputs] = useState({ Password: "" });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const {
// //     loading,
// //     error,
// //     AuthPasswordForm: handleAuthPasswordForm,
// //   } = useSignUpWithEmailAndPassword(); // Destructure and alias AuthPasswordForm function

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     handleAuthPasswordForm(inputs); // Call the AuthPasswordForm function from the hook
// //   };

// //   return (
// //     <Container
// //       maxW={"390px"}
// //       align={"center"}
// //       justify={"center"}
// //       border={"1px solid gray"}
// //     >
// //       <Box padding={5}>
// //         <VStack spacing={4}>
// //           <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />
// //           <h1>Create a password</h1>
// //           <p>For security, your password must be 6 characters or more.</p>

// //           <form onSubmit={handleSubmit}>
// //             {" "}
// //             {/* Use onSubmit event */}
// //             <InputGroup>
// //               <Input
// //                 placeholder="Password"
// //                 fontSize={14}
// //                 type={showPassword ? "text" : "password"}
// //                 value={inputs.Password}
// //                 onChange={(e) =>
// //                   setInputs({ ...inputs, Password: e.target.value })
// //                 }
// //               />
// //               <InputRightElement h={"full"}>
// //                 <Button
// //                   variant={"ghost"}
// //                   size={"sm"}
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
// //                 </Button>
// //               </InputRightElement>
// //             </InputGroup>
// //             <Button
// //               w={"full"}
// //               bgGradient="linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))"
// //               color="white"
// //               _hover={{
// //                 bgGradient:
// //                   "linear(to right, rgba(255, 0, 229, 1), rgba(255, 0, 0, 1))",
// //               }}
// //               type="submit"
// //               isLoading={loading}
// //             >
// //               Next
// //             </Button>
// //           </form>
// //           <hr />
// //           <p>English[United Kingdom]</p>
// //         </VStack>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default AuthPasswordForm;
// // import { useState } from "react";
// // import {
// //   Box,
// //   Image,
// //   Input,
// //   Button,
// //   Container,
// //   VStack,
// //   InputGroup,
// //   InputRightElement,
// // } from "@chakra-ui/react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// // const AuthPasswordForm = () => {
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();
// //    const location = useLocation();
// //   const { email, username } = location.state.inputs;

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     navigate("/completeauth", { state: { email, username, password } });
// //   };

// //   return (
// //     <Container
// //       maxW={"390px"}
// //       align={"center"}
// //       justify={"center"}
// //       border={"1px solid gray"}
// //     >
// //       <Box padding={5}>
// //         <VStack spacing={4}>
// //           <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />
// //           <h1>Create a password</h1>
// //           <p>For security, your password must be 6 characters or more.</p>

// //           <form onSubmit={handleSubmit}>
// //             <InputGroup>
// //               <Input
// //                 placeholder="Password"
// //                 fontSize={14}
// //                 type={showPassword ? "text" : "password"}
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //               <InputRightElement h={"full"}>
// //                 <Button
// //                   variant={"ghost"}
// //                   size={"sm"}
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
// //                 </Button>
// //               </InputRightElement>
// //             </InputGroup>
// //             <Button type="submit">Next</Button>
// //           </form>
// //           <hr />
// //           <p>English[United Kingdom]</p>
// //         </VStack>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default AuthPasswordForm;
// import { useState } from "react";
// import {
//   Box,
//   Image,
//   Input,
//   Button,
//   Container,
//   VStack,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// const AuthPasswordForm = () => {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Check if location.state and location.state.inputs are defined
//   if (!location.state || !location.state.inputs) {
//     // Handle the case when necessary data is not available
//     return (
//       <Container maxW={"390px"} align={"center"} justify={"center"}>
//         <Box padding={5}>
//           <p>Error: Necessary data is not available.</p>
//         </Box>
//       </Container>
//     );
//   }

//   const { email, username } = location.state.inputs;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Ensure proper handling of asynchronous state updates
//     await setPassword(password);
//     navigate("/completeauth", { state: { email, username, password } });
//   };

//   return (
//     <Container
//       maxW={"390px"}
//       align={"center"}
//       justify={"center"}
//       border={"1px solid gray"}
//     >
//       <Box padding={5}>
//         <VStack spacing={4}>
//           <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />
//           <h1>Create a password</h1>
//           <p>For security, your password must be 6 characters or more.</p>

//           <form onSubmit={handleSubmit}>
//             <InputGroup>
//               <Input
//                 placeholder="Password"
//                 fontSize={14}
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <InputRightElement h={"full"}>
//                 <Button
//                   variant={"ghost"}
//                   size={"sm"}
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                 </Button>
//               </InputRightElement>
//             </InputGroup>
//             <Button type="submit">Next</Button>
//           </form>
//           <hr />
//           <p>English[United Kingdom]</p>
//         </VStack>
//       </Box>
//     </Container>
//   );
// };

// export default AuthPasswordForm;
import { useState } from "react";
import {
  Box,
  Image,
  Input,
  Button,
  Container,
  VStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const AuthPasswordForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  // Extract email and username from location state

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/completeauth", { inputs });
  };

  return (
    <Container
      maxW={"390px"}
      align={"center"}
      justify={"center"}
      border={"1px solid gray"}
    >
      <Box padding={5}>
        <VStack spacing={4}>
          <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1708892258/picspile/Picspile_asn403.png" />
          <h1>Create a password</h1>
          <p>For security, your password must be 6 characters or more.</p>

          <form>
            <InputGroup>
              <Input
                placeholder="Password"
                fontSize={14}
                type={showPassword ? "text" : "password"}
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button onClick={handleSubmit}>Next</Button>
          </form>
          <hr />
          <p>English[United Kingdom]</p>
        </VStack>
      </Box>
    </Container>
  );
};

export default AuthPasswordForm;
