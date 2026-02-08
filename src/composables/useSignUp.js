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
        error.value=err.message;
        console.log(error.value);
        return null;
      }
};

let useSignup=()=>{
    return {error,createAccount};
};
export default useSignup;
