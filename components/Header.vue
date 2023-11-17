<template>
  <header
    class="flex items-center justify-start max-w-3xl p-4 border-b border-gray-300 md:p-0 md:px-8 md:py-5"
  >
    <div class="flex items-center justify-between w-full">
      <ThemeButton
        @click="
          setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
        "
      />
      <div class="flex space-x-4">
        <HeaderLinks />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
type Theme = "light" | "dark";

const setColorTheme = (theme: Theme) => {
  useColorMode().preference = theme;
};
</script>
