<template>

  <main class="w-full flex flex-[1_1_auto] items-center">

    <div class="w-full flex flex-col items-center gap-y-4">

      <h1 class="text-2xl">
        404!
      </h1>

      <p class="text-lg">
        Ouch! Looks like you have lost your way!
      </p>

      <button
        type="button"
        class="flex items-center w-max gap-x-2 text-lg font-semibold bg-container rounded-md py-2 px-3 property-all duration-500 hover:bg-container/50"
        @click="navigateTo('/')"
      >

        Take me home
        <i class="i-hugeicons-house-02 size-6" />

      </button>

    </div>

  </main>

</template>

<script setup lang="ts">
useHead({
  title: 'Page Not Found',
})

</script>
