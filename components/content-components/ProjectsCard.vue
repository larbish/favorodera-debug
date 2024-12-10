<template>

  <NuxtLink
    :to="projectPath"
    class="group flex flex-col gap-y-2 rounded-4 bg-container p-3"
  >

    <div class="group aspect-1.5 overflow-hidden b b-transparent rounded-4 bg-black p-1">

      <div class="size-full overflow-hidden rounded-lg duration-1000 delay-100 property-all group-hover:scale-110">
        <img
          :alt="projectName"
          :src="projectImage"
          class="size-full object-cover"
        >
      </div>

    </div>

    <div class="flex flex-col gap-y-1">

      <h1 class="text-sm font-semibold line-clamp-1">
        {{ projectName }}
      </h1>

      <p class="text-sm text-gray line-clamp-1">
        {{ projectDescription }}
      </p>

    </div>

  </NuxtLink>

</template>

<script setup lang="ts">
defineProps({
  projectName: String,
  projectPath: String,
  projectImage: String,
  projectDescription: String,
})
</script>
