import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config"; // adjust path as needed
import {
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const useLoginWithFacebook = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const provider = new FacebookAuthProvider();

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  // Facebook login function
  const facebookLogin = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Facebook login failed.");
      }
      setUser(res.user);
    } catch (err) {
      console.error("Facebook login error:", err);
      setError(err.message || "Login failed.");
    } finally {
      setIsPending(false);
    }
  };

  // Logout function
  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await signOut(auth);
      setUser(null);
      console.log("User logged out.");
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message || "Logout failed.");
    } finally {
      setIsPending(false);
    }
  };

  return { facebookLogin, logout, user, error, isPending };
};
