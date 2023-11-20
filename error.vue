<template>
  <Head>
    <Title>Maciej Szostak · Page not found</Title>
  </Head>
  <div class="flex flex-col items-center justify-center h-[100dvh]">
    <h1 class="text-2xl font-bold">{{ error.statusCode }}</h1>
    <span class="mt-4 text-lg">{{
      error.statusCode === 404 && "Page not found :("
    }}</span>
    <Button :title="buttonTitle" :onclick="handleError" />
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => clearError({ redirect: "/" });
const buttonTitle = "Go home";
</script>
