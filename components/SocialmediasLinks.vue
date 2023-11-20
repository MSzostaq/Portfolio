<template>
  <div class="flex space-x-4">
    <template v-for="link in links" :key="link.to">
      <NuxtLink :to="link.to" target="_blank" class="text-sm md:text-base">
        {{ link.text }}
      </NuxtLink>
    </template>
    <ResumeLink />
    <EmailLink />
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    to: "https://github.com/MSzostaq",
    text: "GitHub",
  },
  {
    to: "https://www.linkedin.com/in/mszostaq/",
    text: "Linkedin",
  },
];
</script>
