<template>
  <div class="flex space-x-4">
    <template v-for="link in LINKS" :key="link.to">
      <NuxtLink
        :to="link.to"
        class="text-sm md:text-base"
        activeClass="font-bold text-gray-800 dark:text-gray-50"
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
