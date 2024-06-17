<template>
  <div class="mx-auto md:max-w-3xl 2xl:max-w-4xl">
    <div class="bg-[url('~/assets/grid.svg')] bg-top bg-repeat-y bg-contain">
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>
