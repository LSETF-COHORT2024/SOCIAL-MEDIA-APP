import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const AuthPasswordForm = async (inputs) => {
    if (!inputs.password) {
      console.log("Please provide a password");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  const AuthForm = async (inputs) => {
    if (!inputs.username || !inputs.email || !inputs.password) {
      console.log("Please fill all the fields");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
    } catch (error) {
      console.log("Error creating user:", error);
      return;
    }

    // If user creation successful, you can proceed with additional logic
    // For example, storing additional user information to a database

    if (newUser) {
      const userDoc = {
        uid: user?.uid,
        email: inputs.email,
        username: inputs.username,
        bio: "",
        profilePicURL: "",
        followers: [],
        following: [],
        posts: [],
        createdAt: Date.now(), // Additional user data
      };

      await setDoc(doc(firestore, "users", newUser.user.uid, userDoc));
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      //   console.log("User created:", userDoc);
    }
  };

  return { loading, error, AuthForm, AuthPasswordForm };
};

export default useSignUpWithEmailAndPassword;
