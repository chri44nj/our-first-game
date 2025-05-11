<script lang="ts" setup>
import { createDraggable } from "animejs";

onMounted(() => {
  createDraggable(".square");
});
</script>

<template>
  <div class="text-page">
    <h1 class="mb-4">Design</h1>
    <div class="flex flex-col gap-8">
      <section>
        <h2 class="mb-2">Typography</h2>
        <div class="flex flex-col gap-4 p-4 border border-offwhite">
          <h2 class="text-4xl">This is a heading</h2>
          <h3 class="text-xl">This is a slightly smaller heading</h3>
          <p>This is extremely enlightening text regarding going from zero to hero by means of dealing drugs.</p>
          <p>This is a <span class="text-highlight">text highlight</span>.</p>
        </div>
      </section>
      <section>
        <h2 class="mb-2">Colors</h2>
        <div class="flex flex-wrap gap-2 items-center p-4 border border-offwhite">
          <ColorItem name="Charcoal" color="charcoal" bordered />
          <ColorItem name="Off-White" color="offwhite" />
          <ColorItem name="Magenta" color="magenta" />
          <ColorItem name="Teal" color="teal" />
          <ColorItem name="Pink" color="pink" />
          <ColorItem name="Success" color="success" />
          <ColorItem name="Error" color="error" />
          <ColorItem name="Warning" color="warning" />
        </div>
      </section>
      <section>
        <h2 class="mb-2">Buttons</h2>
        <div class="flex flex-col gap-4 p-4 border border-offwhite">
          <div class="flex flex-wrap gap-2 items-center">
            <Button label="Primary" color="primary" />
            <Button label="Secondary" color="secondary" />
            <Button label="Off-White" color="offwhite" />
            <Button label="Charcoal" color="charcoal" />
          </div>
          <div class="flex flex-wrap gap-2 items-center">
            <Button label="Primary Link" color="primary" type="link" />
            <Button label="Secondary Link" color="secondary" type="link" />
            <Button label="Off-White Link" color="offwhite" type="link" />
            <Button label="Charcoal Link" color="charcoal" type="link" />
          </div>
        </div>
      </section>
      <section>
        <h2 class="mb-2">Icons</h2>
        <div class="p-4 border border-offwhite">
          <p>Sizes</p>
          <div class="flex flex-wrap gap-2 items-center mb-4">
            <Iconic name="material-symbols:local-shipping" size="small" title="small" />
            <Iconic name="material-symbols:local-shipping" size="medium" title="medium" />
            <Iconic name="material-symbols:local-shipping" size="large" title="large" />
          </div>
          <p>Collection</p>
          <div class="flex flex-wrap gap-2 items-center">
            <Iconic name="material-symbols:local-shipping" title />
            <Iconic name="material-symbols:local-police" title />
            <Iconic name="material-symbols:currency-rupee-circle" title />
            <Iconic name="material-symbols:favorite-rounded" title />
            <Iconic name="material-symbols:bookmark-rounded" title />
          </div>
        </div>
      </section>
      <section>
        <h2 class="mb-2">Animations</h2>
        <div class="p-4 border border-offwhite">
          <div class="flex flex-col gap-2">
            <a href="https://animejs.com/documentation/draggable" target="_blank" class="w-fit" title="Click to see documentation">Draggable</a>
            <div class="square draggable w-10 h-10 bg-teal"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
