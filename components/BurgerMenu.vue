<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  emit("update:menuOpen", menuOpen.value); // Emit the new value to parent
};
</script>

<template>
  <div>
    <button class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50" @click="toggleMenu" aria-label="Toggle Menu">
      <div class="transition-all duration-300 ease-in-out w-6 h-1 mb-1" :class="menuOpen ? 'rotate-45 translate-y-2 bg-magenta' : 'bg-teal'"></div>
      <div class="transition-all duration-300 ease-in-out w-6 h-1 mb-1" :class="menuOpen ? 'opacity-0 bg-magenta' : 'bg-teal'"></div>
      <div class="transition-all duration-300 ease-in-out w-6 h-1 mb-1" :class="menuOpen ? '-rotate-45 -translate-y-2 bg-magenta' : 'bg-teal'"></div>
    </button>
  </div>
</template>

<style scoped></style>
