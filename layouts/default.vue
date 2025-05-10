<script setup>
import { ref } from "vue";
import BurgerMenu from "~/components/BurgerMenu.vue";

const menuOpen = ref(false); // Declare the menuOpen state
</script>

<template>
  <div class="min-h-screen flex flex-col pt-10 bg-charcoal">
    <header class="flex items-center justify-center bg-magenta text-charcoal h-10 fixed w-full z-10 transition-all duration-300 ease-in-out" :class="menuOpen ? 'top-0' : '-top-full'">Arfjæs, level 1</header>

    <main class="flex-grow p-8 relative">
      <BurgerMenu v-model:menuOpen="menuOpen" />
      <slot />
    </main>

    <footer class="flex items-center justify-center bg-magenta text-charcoal h-10 text-center fixed w-full z-10 transition-all duration-300 ease-in-out" :class="menuOpen ? 'bottom-0' : '-bottom-full'">
      <p>&copy; 2025 Empire of Drugs. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style scoped></style>
