<script lang="ts" setup>
defineProps<{
  area?: string;
}>();
</script>

<template>
  <div class="w-screen h-screen relative border border-darkgrey">
    <p class="p-4 absolute">{{ area ? area : "No Quadrant Name" }}</p>
    <slot />
  </div>
</template>

<style></style>
