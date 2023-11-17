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
        <NuxtLink
          to="/"
          class="text-sm md:text-base"
          active-class="font-bold text-gray-800 dark:text-gray-50"
        >
          home
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="text-sm md:text-base"
          active-class="font-bold text-gray-800 dark:text-gray-50"
        >
          projects
        </NuxtLink>
        <NuxtLink
          to="/tech"
          class="text-sm md:text-base"
          active-class="font-bold text-gray-800 dark:text-gray-50"
        >
          tech
        </NuxtLink>
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
