<template>

  <NuxtLoadingIndicator color="white" />

  <main class="w-full flex flex-[1_1_auto] flex-col gap-y-10">

    <NuxtPage />

    <ComponentFooter />

    <ComponentScrollTop />

  </main>

</template>

<script setup lang="ts">

useSeoMeta({
  titleTemplate: title => `Favour Emeka | ${title}`,
  ogUrl: 'https://favorodera.vercel.app',
  description: 'Favour Emeka - Front-end Web Developer',
  ogDescription: 'Favour Emeka - Front-end Web Developer',
  ogImage: {
    alt: 'Favour Emeka - Front-end Web Developer',
    url: '/images/avatar.jpg',
    type: 'image/jpeg',
    width: 200,
    height: 200,
  },
  twitterImage: {
    alt: 'Favour Emeka - Front-end Web Developer',
    url: '/images/avatar.jpg',
    type: 'image/jpeg',
    width: 200,
    height: 200,
  },
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
</script>
