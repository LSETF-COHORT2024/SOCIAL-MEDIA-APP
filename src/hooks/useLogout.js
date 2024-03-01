import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const showToast = useShowToast();
  const handleLogout = async () => {
    // try {}
    try {
    } catch (error) {}

    return { logout, loading, error };
  };
};
export default useLogout;
