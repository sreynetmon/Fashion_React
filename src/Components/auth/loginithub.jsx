import { GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase-config";
import secureLocalStorage from "react-secure-storage";

export const useLoginWithGithub = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GithubAuthProvider();

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
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete Github login");
      }

      const user = res.user;
      console.log("Facebook user: ", user);
      console.log("Env log:", import.meta.env.VITE_BASE_URL);

      const registerWithApi = async () =>{
        try{
          const res = await fetch (`${import.meta.env.VITE_BASE_URL}/register`,{
            method: "POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: user.displayName,
              email: user.email,
              password: `${user.displayName}${import.meta.env.VITE_SECRET_KEY}`,
              confirmed_password: `${user.displayName}${import.meta.env.VITE_SECRET_KEY}`
            })
          })
          console.log("User email:", user.email)
          console.log("User pass: ", user.password)
          console.log("env log:", import.meta.env.VITE_BASE_URL);

          if(!res.ok){
            console.log("Register failed: ", res.status);
          }
          if(res.status == 200 || res.status == 400){
            const login = async() =>{
              try{
                const res = await fetch (`${import.meta.env.VITE_BASE_URL}/login`,{
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    email: user.email,
                    password: `${user.displayName}${import.meta.env.VITE_SECRET_KEY}`
                  })
                })
                console.log("User email:", user.email)
                console.log("User pass: ", user.password)

                if (!res.ok) {
                  console.log("Login failed", res.status)
                  throw new Error("Login is not successfully")
                }
                const data = await res.json();
                console.log("After login data: ", data)
                secureLocalStorage.setItem("googlesession_access_token", data.access_token)

              } catch (error) {
                console.log(error)
              }
            }
            login();
              }
            }catch(error){
              console.log(error);
            }
          }
          registerWithApi();
          setIsPending(false);
          return user;
        }catch(error){
          console.log(error);
          setError(error.message);
          setIsPending(false);
        }
      };

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signOut(auth);
      console.log("User signed out successfully");
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, logout, error, isPending, user };
};