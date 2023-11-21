<template>
  <div class="flex space-x-4">
    <template v-for="link in LINKS" :key="link.to">
      <NuxtLink
        :to="link.to"
        target="_blank"
        class="flex items-center space-x-1 text-sm md:text-base hover:text-orange-500"
      >
        <component :is="link.icon" class="w-4 h-4" :fontControlled="false" />
        <span>{{ link.text }}</span>
      </NuxtLink>
    </template>
    <ResumeLink />
    <EmailLink />
  </div>
</template>

<script setup lang="ts">
import GithubIcon from "~/assets/github.svg";
import LinkedinIcon from "~/assets/linkedin.svg";

const LINKS = [
  {
    to: "https://github.com/MSzostaq",
    text: "GitHub",
    icon: GithubIcon,
  },
  {
    to: "https://www.linkedin.com/in/mszostaq/",
    text: "Linkedin",
    icon: LinkedinIcon,
  },
];
</script>
