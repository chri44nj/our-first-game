<script lang="ts" setup></script>

<template>
  <div class="text-page">
    <h1 class="mb-4">Playground</h1>
    <div class="flex flex-col gap-8">
      <section>
        <h2 class="mb-2">Buildings</h2>
        <div class="flex gap-4 p-4 border border-offwhite">
          <div class="w-40 h-20 bg-darkgrey relative flex items-center justify-center group cursor-pointer">
            <div class="w-6 h-2 bg-teal -translate-x-1/2 left-1/2 bottom-0 absolute"></div>
            <p class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Shop</p>
          </div>
          <div class="w-20 h-40 bg-darkgrey relative flex items-center justify-center group cursor-pointer">
            <div class="w-2 h-6 bg-teal bottom-6 left-0 absolute"></div>
            <p class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Shop</p>
          </div>
          <div class="w-60 h-32 bg-lightgrey relative flex items-center justify-center group cursor-pointer">
            <div class="w-6 h-2 bg-teal -translate-x-1/2 left-1/2 bottom-0 absolute"></div>
            <p class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">School</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
