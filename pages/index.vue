<template>
  <Head>
    <Title>Frontend Developer · Maciej Szostak</Title>
    <Meta name="description" content="Frotend developer" />
  </Head>
  <div class="flex flex-col items-center justify-center h-screen">
    <p class="text-2xl font-bold text-purple-600">Hello!</p>
    <div class="flex flex-col mt-2 space-y-1">
      <NuxtLink to="/projects" class="">Projects</NuxtLink>
      <NuxtLink to="/tech" class="">Tech</NuxtLink>
    </div>
  </div>
</template>
