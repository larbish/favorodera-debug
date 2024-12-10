<template>
  <header
    class="sticky top-0 z-1 w-full flex items-center justify-between gap-y-16 bg-transparent py-4 backdrop-blur-20"
  >

    <button
      type="button"
      class="group flex items-center gap-2"
      @click="navigateTo(onGridPage ? '/' : '/projects')"
    >
      <i class="i-hugeicons-arrow-left-02 size-6 group-hover:text-gray property-color duration-500" />
      <p class="group-hover:text-gray text-sm tracking-widest property-color duration-500 font-semibold">
        GO BACK
      </p>

    </button>

    <div
      v-if="onGridPage"
      class="flex items-center gap-1 text-gray font-semibold text-sm"
    >

      <template v-if="total && status === 'success'">
        <p><i class="i-hugeicons-folder-01" /> TOTAL PROJECTS: <span class="text-white">{{ total }}</span></p>
      </template>

      <template v-else>
        <p>LOADING...</p>
      </template>

    </div>

  </header>
</template>

<script setup lang="ts">
const { data: total, status } = await useLazyAsyncData(
  'projects-total',
  () => queryContent('/projects')
    .where({ _type: 'markdown', id: { $exists: true } })
    .count(),
  { server: false },
)

const onGridPage = useRoute().path === '/projects'
</script>
