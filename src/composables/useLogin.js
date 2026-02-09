import { ref } from "vue";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

let error = ref(null);

let signIn=async (email,password)=>{
    try {
        const res = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
        if(! res){
            throw new Error("can't login account");
        }
        return res.user;
    } catch (err) {
        if (err.code === "auth/user-not-found") {
      error.value = "No account found with this email.";
    } else if (err.code === "auth/wrong-password") {
      error.value = "Incorrect password.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Invalid email address.";
    } else {
      error.value = "Failed to login. Please try again.";
    }
    }
    
}

const useLogin = () => {
  return { error, signIn };
};

export default useLogin;