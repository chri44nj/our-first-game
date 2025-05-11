<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const localMenuOpen = ref(false);

const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    localMenuOpen.value = false;
    navigateTo("/login");
  } catch (error) {
    console.error("Failed to sign out:", error);
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-charcoal relative">
    <div class="fixed top-0 left-0 w-screen h-screen bg-charcoal z-10 transition-opacity duration-300" :class="localMenuOpen ? 'opacity-50' : 'opacity-0'"></div>
    <header class="flex items-center px-4 justify-between bg-magenta text-charcoal h-10 fixed w-full z-30 transition-all duration-300 ease-in-out" :class="localMenuOpen ? 'top-0 opacity-100' : '-top-10 opacity-0'">
      <p>{{ user ? user?.user_metadata.user_name : "User not signed in" }}</p>
      <button class="hover:text-offwhite transition-colors duration-300" @click="signOut">Sign Out</button>
    </header>
    <main class="h-full relative">
      <NavMenu :menuOpen="localMenuOpen" />
      <BurgerMenu v-if="user" v-model:menuOpen="localMenuOpen" />
      <slot />
    </main>

    <footer class="flex items-center justify-center bg-magenta text-charcoal h-10 text-center fixed w-full z-30 transition-all duration-300 ease-in-out" :class="localMenuOpen ? 'bottom-0 opacity-100' : '-bottom-10 opacity-0'">
      <p>&copy; 2025 Empire of Drugs | All Rights Reserved | Poruma & Yobnilmerg</p>
    </footer>
  </div>
</template>

<style scoped></style>
