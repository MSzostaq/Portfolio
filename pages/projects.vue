<template>
  <Head>
    <Title>Maciej Szostak · Projects</Title>
    <Meta name="description" content="Frotend developer" />
  </Head>
  <div class="flex flex-col items-center justify-start space-y-4">
    <Projects />
    <Technologies />
  </div>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
