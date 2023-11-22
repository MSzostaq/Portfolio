<template>
  <Head>
    <Title>Maciej Szostak · Frontend Developer</Title>
    <Meta name="description" content="Frotend developer" />
  </Head>
  <div class="flex flex-col items-center justify-start py-12 space-y-10">
    <HomeTopSection />
    <HomeMainSection />
  </div>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
