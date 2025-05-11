<script lang="ts" setup>
const props = defineProps<{
  menuOpen: boolean;
}>();
</script>

<template>
  <nav class="flex flex-col justify-center items-center border-r-2 border-magenta transition-all duration-1000 ease-in-out p-8 gap-2 fixed bg-charcoal h-screen top-0 w-40 z-20" :class="menuOpen ? 'left-0 ' : '-left-40'">
    <ul class="list-none text-magenta text-xl">
      <li class="nav-link"><a href="/">Home</a></li>
      <li class="nav-link"><a href="/design">Design</a></li>
      <li class="nav-link"><a href="/gameplay">Gameplay</a></li>
      <li class="nav-link"><a href="/playground">Playground</a></li>
    </ul>
  </nav>
</template>

<style scoped></style>
