import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase-config"; // adjust path as needed
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const login = async () => {
    setError(null);
    setIsPending(true);
    try {
        const result = await signInWithPopup(auth, provider);
        if (!result) {
          throw new Error("signup failed.");
        }
        const user = result.user;
        console.log("User signed in:", user);
        setIsPending(false);
    } catch (error) {
        console.error("Google login error:", error);
        setError(error.message || "Login failed.");
        setIsPending(false);
    }
};
    const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
        await signOut(auth);
        console.log("User signed out.");
        setIsPending(false);
    } catch (error) {
        console.error("Google logout error:", error);
        setError(error.message || "Logout failed.");
        setIsPending(false);
    }
};
    return { login, logout, user, error, isPending };
};
