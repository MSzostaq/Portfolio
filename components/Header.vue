<template>
  <header
    class="flex items-center justify-start max-w-4xl p-4 dark:border-gray-700 md:p-0 md:px-8 md:py-5"
  >
    <div class="flex items-center justify-between w-full">
      <div>
        <NuxtLink
          to="/"
          class="text-xl font-black lg:transition-all lg:hover:text-orange-500"
        >
          MSzostak
        </NuxtLink>
      </div>
      <div class="flex space-x-4">
        <ButtonTheme
          @click="
            setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')
          "
        />
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
