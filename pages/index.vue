<template>
  <Head>
    <Title>Maciej Szostak · Frontend Developer</Title>
    <Meta name="description" content="Frotend developer" />
  </Head>
  <div class="flex flex-col items-center justify-start h-screen py-12">
    <Avatar />
    <p class="text-2xl font-bold text-purple-600">Hello!</p>
    <SocialmediasLinks />
    <IconApollo class="w-12 h-12" :fontControlled="false" />
  </div>
</template>

<script setup>
import IconApollo from "~/assets/apollo.svg";
</script>
