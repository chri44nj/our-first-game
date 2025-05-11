<script setup>
import { ref, computed } from "vue";
import { signUp, logIn } from "../utils/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const isSignUp = ref(false);

// Regex for email validation (basic)
const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));

// Password must be at least 1 character (you can make this stricter if needed)
const isPasswordValid = computed(() => password.value.trim().length > 0);

// Combine both to determine if the form is valid
const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value);

const toggleForm = () => {
  isSignUp.value = !isSignUp.value;
  error.value = "";
};

const handleSubmit = async () => {
  try {
    error.value = "";

    let result;
    if (isSignUp.value) {
      result = await signUp(email.value, password.value);
    } else {
      result = await logIn(email.value, password.value);
    }

    if (result.error) throw new Error(result.error.message);

    console.log(`${isSignUp.value ? "Sign Up" : "Log In"} successful!`, result);
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
      <button class="bg-magenta text-charcoal px-4 py-2 rounded transition-opacity duration-300" type="submit" :disabled="!isFormValid" :class="{ 'opacity-50': !isFormValid, 'opacity-100': isFormValid }">
        {{ isSignUp ? "Sign Up" : "Log In" }}
      </button>
      <div v-if="error" class="error text-red-400">{{ error }}</div>
    </form>

    <p @click="toggleForm" class="opacity-50 transition-opacity duration-300 hover:opacity-100 text-teal cursor-pointer">
      {{ isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up" }}
    </p>
  </div>
</template>

<style scoped></style>
