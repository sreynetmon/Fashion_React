import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config"; // adjust path as needed
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import secureLocalStorage from "react-secure-storage";

export const useLoginWithGoogle = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const provider = new GoogleAuthProvider();

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  // Google login function
  const googleLogin = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Google login failed.");
      }
      setUser(res.user);
    } catch (err) {
      console.error("Google login error:", err);
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

  return { googleLogin, logout, user, error, isPending };
};
