<template>

  <main class="w-full flex flex-[1_1_auto] flex-col gap-y-2">

    <ProjectsHeader />
    <ProjectsDetails />

  </main>

</template>

<script setup lang="ts">
const { project } = useRoute().params
useHead({
  title: String(project).split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(''),
})
</script>
