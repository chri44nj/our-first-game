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
  <div class="flex flex-col gap-1 items-center">
    <div class="rounded-full h-8 w-8" :class="[backgroundColor, bordered ? 'border border-offwhite' : '']" :title="name"></div>
  </div>
</template>

<style></style>
