<template>
  <a
    href="mailto:maciek.szostak55@gmail.com"
    class="flex items-center space-x-1 hover:text-orange-500 md:active:translate-y-0.5"
  >
    <EmailIcon class="w-4 h-4" :fontControlled="false" />
    <span class="font-medium">maciek.szostak55@gmail.com</span>
  </a>
</template>

<script setup>
import EmailIcon from "~/assets/email.svg";
</script>
