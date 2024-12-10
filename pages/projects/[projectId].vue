<template>

  <main class="w-full flex flex-[1_1_auto] flex-col gap-y-2">

    <ComponentNavigationHeader path="/projects" />
    <ProjectsDetails />

  </main>

</template>

<script setup lang="ts">
useHead({
  title: String(useRoute().params.projectId)
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' '),
})

</script>
