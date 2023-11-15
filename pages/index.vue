<template>
  <div
    class="flex flex-col items-center justify-center h-screen dark:bg-slate-800"
  >
    <p class="text-xl font-bold text-purple-600 dark:text-white">Hello Nuxt!</p>
    <div class="flex flex-col space-y-2">
      <NuxtLink to="/projects" class="dark:text-white">Projects</NuxtLink>
      <NuxtLink to="/tech" class="dark:text-white">Tech</NuxtLink>
    </div>
  </div>
</template>
