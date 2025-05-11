<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import BurgerMenu from "~/components/BurgerMenu.vue";
import supabase from "~/utils/supabase"; // Correct default import
import Login from "~/components/Login.vue"; // Import the Login component

const menuOpen = ref(false); // Declare the menuOpen state
const user = ref(null); // To store the current user
const error = ref(null); // To store any potential errors

// Check the session and user state on page load and listen for auth state changes
onMounted(() => {
  // Subscribe to auth state changes
  supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      user.value = session.user; // Store user details
    } else {
      user.value = null; // No user is logged in
    }
  });

  // If a user session exists already (e.g., after a refresh)
  const session = supabase.auth.getSession();
  if (session?.user) {
    user.value = session.user; // Set the user details
  }
});

// Function to log out the user
const logOut = async () => {
  const { error: logoutError } = await supabase.auth.signOut();
  if (logoutError) {
    error.value = logoutError.message; // Display logout error
  } else {
    user.value = null; // Clear user details
    menuOpen.value = false;
  }
};

// Navigate to login page (if needed)
const router = useRouter();
const redirectToLogin = () => {
  router.push("/login");
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-charcoal" :class="user ? 'py-10' : 'justify-center'">
    <header class="flex items-center px-4 justify-between bg-magenta text-charcoal h-10 fixed w-full z-10 transition-all duration-300 ease-in-out" :class="menuOpen && user ? 'top-0 opacity-100' : '-top-10 opacity-0'">
      <span>{{ user?.email }}</span>
      <button v-if="user" class="hover:text-offwhite transition-colors duration-300" @click="logOut">Log Out</button>
    </header>

    <main class="p-8 relative">
      <BurgerMenu v-if="user" v-model:menuOpen="menuOpen" />
      <Login v-if="!user" />
      <div v-else>
        <slot />
      </div>
    </main>

    <footer class="flex items-center justify-center bg-magenta text-charcoal h-10 text-center fixed w-full z-10 transition-all duration-300 ease-in-out" :class="menuOpen && user ? 'bottom-0 opacity-100' : '-bottom-10 opacity-0'">
      <p>&copy; 2025 Empire of Drugs. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Optional styles */
</style>
