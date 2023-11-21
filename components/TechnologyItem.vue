<template>
  <div
    class="flex items-center px-2 py-1 mb-2 mr-2 space-x-2 bg-gray-100 border-2 rounded-lg shadow-sm dark:border-gray-500 dark:bg-gray-800"
  >
    <component :is="technology.icon" class="w-5 h-5" :fontControlled="false" />
    <span
      class="text-xs font-semibold text-gray-500 cursor-default dark:text-white"
      >{{ technology.text }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps(["technology"]);
</script>
