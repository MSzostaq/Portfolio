<template>
  <a
    href="mailto:maciek.szostak55@gmail.com"
    class="flex items-center space-x-1 lg:hover:text-orange-500 lg:active:translate-y-0.5 lg:transition-all"
  >
    <EmailIcon class="w-4 h-4" :fontControlled="false" />
    <span class="font-medium">maciek.szostak55@gmail.com</span>
  </a>
</template>

<script setup>
import EmailIcon from "~/assets/email.svg";
</script>
