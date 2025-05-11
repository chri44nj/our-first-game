<script lang="ts" setup>
const props = defineProps<{
  menuOpen: boolean;
}>();
</script>

<template>
  <nav class="flex flex-col justify-center items-center border-r-2 border-magenta transition-all duration-1000 ease-in-out p-8 gap-2 fixed bg-charcoal h-screen top-0 w-40 z-20" :class="menuOpen ? 'left-0 ' : '-left-40'">
    <ul class="list-none text-xl">
      <li class="nav-link hopacity-80"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="nav-link hopacity-80"><NuxtLink to="/design">Design</NuxtLink></li>
      <li class="nav-link hopacity-80"><NuxtLink to="/gameplay">Gameplay</NuxtLink></li>
      <li class="nav-link hopacity-80"><NuxtLink to="/playground">Playground</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-magenta;
}
</style>
