<template>
  <NuxtLink
    to="/docs/resume.pdf"
    target="_blank"
    class="flex items-center space-x-1 lg:hover:text-orange-500 lg:active:translate-y-0.5 lg:transition-all"
  >
    <ResumeIcon />
    <span class="font-medium">Resume</span>
  </NuxtLink>
</template>

<script setup>
import ResumeIcon from "~/assets/resume.svg";
</script>
