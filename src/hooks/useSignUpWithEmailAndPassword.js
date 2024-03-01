import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase";
import useShowToast from "./useShowToast";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      inputs.fullname
    ) {
      showToast("r", "please fill all the field", "error");
      toast({
        title: "Error.",
        description: "please fill all the field",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        input.password
      );
      if (newUser && error) {
        showToast("Error", "error", "error");
        return;
      }
      if (newUser) {
        const useDoc = {
          uid: newbar.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", "newUser.user.uid"), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (error) {
      // showToast("Error" "error.message", "error")
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
