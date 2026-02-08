import {ref} from "vue";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
const error=ref(null);

let createAccount=async (email,password,displayName)=>{
    try {
        const res = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        if(!res){
            throw new Error("could not create new user")
        }

        await updateProfile(res.user,{displayName});
        return res.user;
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
      error.value = "The email address is already in use by another account.";
    } else if (err.code === "auth/weak-password") {
      error.value = "Password must be at least 6 characters.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Please enter a valid email address.";
    } else {
      error.value = "Something went wrong. Please try again.";
    }
        // console.log(error.value);
        //return null;
      }
};

let useSignup=()=>{
    return {error,createAccount};
};
export default useSignup;
