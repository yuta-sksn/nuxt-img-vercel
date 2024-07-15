<template>
  <div>
    <h1>Testing <a href="https://image.nuxt.com/">NuxtImage</a> on Vercel.</h1>
    <template v-for="i in 10" :key="`${i}-i`">
      <NuxtImg src="/logo.svg" format="webp" loading="lazy" /><br />
    </template>
  </div>
</template>
