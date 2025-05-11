<script lang="ts" setup>
const props = defineProps<{
  name: string;
  color: string;
  bordered?: boolean;
}>();

const backgroundColor = computed(() => {
  return `bg-${props.color}`;
});
</script>

<template>
  <div class="rounded-full h-8 w-8 cursor-pointer" :class="[backgroundColor, bordered ? 'border border-offwhite' : '']" :title="name"></div>
</template>

<style></style>
