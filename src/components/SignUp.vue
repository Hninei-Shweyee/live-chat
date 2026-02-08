<template lang="">
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="display name" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button>Sign Up</button>
    </form>   
</template>

<script>
import { ref } from "vue";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const error=ref(null);
    const signUp = async () => {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        )
        if(!res){
            throw new Error("could not create new user")
        }

        console.log("User created:", res.user);
      } catch (err) {
        error.value=err.message;
        console.log(error.value);
      }
    };

    return { displayName, email, password, signUp };
  }
};
</script>

<style>
    
</style>