<template>
  <NuxtLink
    to="/docs/cv.pdf"
    target="_blank"
    class="flex items-center space-x-1 text-sm md:text-base hover:text-orange-500"
  >
    <ResumeIcon />
    <span>Resume</span>
  </NuxtLink>
</template>

<script setup>
import ResumeIcon from "~/assets/resume.svg";
</script>
