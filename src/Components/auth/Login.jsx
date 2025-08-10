import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/auth";
// import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";
import { 
  storeAccessToken, 
  storeRefreshToken, 
  getDecryptedAccessToken 
} from "../../utils/tokenUtils";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import App from "../../App";

export default function Login() {

  const {register, handleSubmit} = useForm({
    defaultValues:{
      email: "",
      password: ''
    }
  })
  //  calling RTK
  const [loginSubmit, {data, isSuccess, isLoading}] = useLoginMutation();

  function onSubmitting(values){
      loginSubmit({
        loginForm:{
          email: values.email,
          password: values.password
        }
      })
  }
 
  //handle successful login response
  useEffect(() =>{
    if (isSuccess && data) {
      console.log("Login successful, storing tokens...");
      
      // Store encrypted tokens using utility functions
      storeAccessToken(data?.access_token);
      storeRefreshToken(data?.refresh_token);
      
      console.log("Tokens stored successfully");
      
      // Example: Get the decrypted token to verify it works
      const decryptedToken = getDecryptedAccessToken();
      console.log("The value of token which already decrypt: ", decryptedToken);
      if (decryptedToken) {
        console.log("Token decryption successful");
        // Don't log the actual token for security reasons
      }
    } ;
  }, [isSuccess, data])

  // const decrypt = AES.decrypt("@secure.s.car_access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZXQxMjNAZ21haWwuY29tIiwiZXhwIjoxNzU0MzU3MTM0LCJ0eXBlIjoiYWNjZXNzIn0.3Naoe_P1-2sbmsoOZ8DruvnO1600u7Jjk7dP_iZdR0s")
  // console.log("The decript of access: decript");


  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmitting)} className="flex max-w-md flex-col gap-4 border-1 p-5 rounded-lg w-[50%] h-auto" >
        <h1 className="text-center text-2xl text-blue-500 font-bold">Login Form</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <input id="email1" type="email" className="p-2 rounded border w-full" placeholder="name@gmail.com" required {...register("email")} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <input id="password" type="password" required {...register("password")} className="p-2 rounded border w-full" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me </Label>
      </div>
      <div className="flex flex-col">
        <App/>
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Submit'}
      </Button>
    </form>
    </div>
  );
}
