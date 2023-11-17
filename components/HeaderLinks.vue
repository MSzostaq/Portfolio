<template>
  <div class="flex space-x-4">
    <template v-for="link in links" :key="link.to">
      <NuxtLink
        :to="link.to"
        :class="link.class"
        :active-class="link.activeClass"
      >
        {{ link.text }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    to: "/",
    text: "home",
    class: "text-sm md:text-base",
    activeClass: "font-bold text-gray-800 dark:text-gray-50",
  },
  {
    to: "/projects",
    text: "projects",
    class: "text-sm md:text-base",
    activeClass: "font-bold text-gray-800 dark:text-gray-50",
  },
  {
    to: "/tech",
    text: "tech",
    class: "text-sm md:text-base",
    activeClass: "font-bold text-gray-800 dark:text-gray-50",
  },
];
</script>
