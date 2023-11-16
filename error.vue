<template>
  <div class="flex flex-col items-center justify-center h-[100dvh]">
    <p class="text-xl font-bold">{{ error.statusCode }}</p>
    <button @click="handleError">Go home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => clearError({ redirect: "/" });
</script>
