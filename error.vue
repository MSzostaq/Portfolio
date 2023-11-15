<template>
  <div class="flex flex-col items-center justify-center h-[100dvh]">
    <p class="text-xl font-bold">{{ error.statusCode }}</p>
    <p class="text-xl font-bold">{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>
