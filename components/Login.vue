<script setup>
import { ref } from "vue";
import { signUp, logIn } from "../utils/auth"; // Adjust import according to your file structure

const email = ref("");
const password = ref("");
const error = ref("");
const isSignUp = ref(false); // Track whether user is in Sign Up mode or Log In mode

// Function to toggle between Sign Up and Log In forms
const toggleForm = () => {
  isSignUp.value = !isSignUp.value;
  error.value = ""; // Clear error message when toggling
};

// Handle the form submission (Sign Up or Log In)
const handleSubmit = async () => {
  try {
    error.value = ""; // Clear any previous error

    let result;

    if (isSignUp.value) {
      result = await signUp(email.value, password.value);
    } else {
      result = await logIn(email.value, password.value);
    }

    if (result.error) {
      throw new Error(result.error.message);
    }

    // On successful sign up or log in
    console.log(`${isSignUp.value ? "Sign Up" : "Log In"} successful!`, result);
    // Redirect user to dashboard or other page as needed
  } catch (e) {
    error.value = e.message || "An error occurred. Please try again.";
  }
};
</script>
<template>
  <div class="flex flex-col items-center gap-4 justify-center">
    <h1>{{ isSignUp ? "Sign Up" : "Sign In" }}</h1>
    <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button class="bg-magenta" type="submit">{{ isSignUp ? "Sign Up" : "Log In" }}</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>

    <!-- Toggle between Sign Up and Log In -->
    <p @click="toggleForm" class="opacity-50 transition-opacity duration-300 hover:opacity-100 text-teal cursor-pointer">
      {{ isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up" }}
    </p>
  </div>
</template>

<style scoped></style>
