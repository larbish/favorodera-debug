<template>

  <button
    type="button"
    class="fixed bottom-6 right-4 bg-gray/20 hover:bg-gray/10 rounded-full p-4"
    :class="{
      hidden: hidden,
    }"
    @click="scrollTop"
  >
    <i class="i-hugeicons-arrow-up-02 size-5" />
  </button>

</template>

<script lang="ts" setup>
const hidden = ref(true)

const scrollTop = () => window.scrollTo({ top: 0 })

window?.addEventListener(
  'scroll',
  () => hidden.value = window.scrollY < window.innerHeight * 0.6,
  { passive: true },
)
</script>
