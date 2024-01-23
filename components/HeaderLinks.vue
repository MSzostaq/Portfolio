<template>
  <div class="flex space-x-4">
    <template v-for="link in LINKS" :key="link.to">
      <NuxtLink
        :to="link.to"
        class="text-sm md:text-base lg:hover:text-orange-500 decoration-dashed"
        activeClass="text-black dark:text-gray-50 lg:dark:hover:text-orange-500 underline underline-offset-4"
      >
        {{ link.text }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const LINKS = [
  {
    to: "/",
    text: "home",
  },
  {
    to: "/projects",
    text: "projects",
  },
];
</script>
