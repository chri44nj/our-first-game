<script lang="ts" setup>
const props = defineProps<{
  name: string;
  size?: string;
  color?: string;
  title?: boolean | string;
}>();

const iconSize = computed(() => {
  switch (props.size) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-2xl";
    case "large":
      return "text-4xl";
    default:
      return "text-2xl";
  }
});
</script>

<template>
  <Icon :name="name" class="" :class="iconSize" :title="title === true ? name : title ? title : ''" />
</template>

<style></style>
