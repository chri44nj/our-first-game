<script lang="ts" setup>
const props = defineProps<{
  label: string;
  size?: string;
  type?: string;
  color?: string;
  fit?: boolean;
}>();

const buttonType = computed(() => {
  switch (props.type) {
    case "solid":
      return props.fit ? "" : "min-w-40";
    case "link":
      return "bg-transparent p-0";
    default:
      return props.fit ? "" : "min-w-40";
  }
});

const buttonColor = computed(() => {
  const isLink = props.type === "link";

  switch (props.color) {
    case "primary":
      return isLink ? "text-magenta" : "bg-magenta text-charcoal";
    case "secondary":
      return isLink ? "text-teal" : "bg-teal text-charcoal";
    case "offwhite":
      return isLink ? "text-offwhite" : "bg-offwhite text-charcoal";
    case "charcoal":
      return isLink ? "text-charcoal" : "bg-charcoal text-offwhite";
    default:
      return isLink ? "text-magenta" : "bg-magenta text-charcoal";
  }
});
</script>

<template>
  <button class="hopacity-80 w-fit" :class="[buttonType, buttonColor]">{{ label }}</button>
</template>

<style></style>
