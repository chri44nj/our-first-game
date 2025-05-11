<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const userName = ref("");
const error = ref("");
const signingUp = ref(false);
const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
const isPasswordValid = computed(() => password.value.trim().length > 0);
const isFormValid = computed(() => isEmailValid.value && isPasswordValid.value);

const toggleForm = () => {
  signingUp.value = !signingUp.value;

  error.value = "";
};

const signUp = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          user_name: userName.value,
        },
      },
    });
    if (error) throw error;
  } catch (error) {
    error.value = error.message;
    return;
  }
};
const login = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;
  } catch (error) {
    error.value = error.message;
    return;
  }
  navigateTo("/");
};

const handleSubmit = () => {
  if (signingUp.value) {
    signUp();
  } else {
    login();
  }
};
</script>

<template>
  <div class="flex flex-col items-center gap-4 justify-center h-full">
    <h1>{{ signingUp ? "Sign Up" : "Sign In" }}</h1>
    <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input v-if="signingUp" type="text" v-model="userName" placeholder="User Name" required />
      <button class="bg-magenta text-charcoal px-4 py-2 rounded transition-opacity duration-300" type="submit" :disabled="!isFormValid" :class="{ 'opacity-50': !isFormValid, 'opacity-100': isFormValid }">
        {{ signingUp ? "Sign Up" : "Log In" }}
      </button>
      <div v-if="error" class="error text-red-400">{{ error }}</div>
    </form>

    <p @click="toggleForm" class="opacity-50 transition-opacity duration-300 hover:opacity-100 text-teal cursor-pointer">
      {{ signingUp ? "Already have an account? Log In" : "Don't have an account? Sign Up" }}
    </p>
  </div>
</template>

<style scoped></style>
