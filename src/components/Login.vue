<template lang="">
    <h2>Login</h2>
    <form @submit.prevent="Login">
        
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button>Login</button>
    </form>   
</template>
<script>
import {ref} from 'vue'
export default {
    setup(){
       
        let email=ref("");
        let password=ref("");
        let login=()=>{
            console.log()
        }
        return {email,password,login}
    }
}
</script>
<style lang="">
    
</style>