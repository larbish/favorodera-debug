<template>

  <NuxtLink
    :to="path"
    class="group flex flex-col gap-y-2 rounded-4 bg-container p-3"
  >

    <div class="group aspect-1.5 overflow-hidden b b-transparent rounded-4 bg-black p-1">

      <div class="size-full overflow-hidden rounded-lg duration-1000 delay-100 property-all group-hover:scale-110">
        <img
          :alt="name"
          :src="image"
          class="size-full object-cover"
        >
      </div>

    </div>

    <div class="flex flex-col gap-y-1">

      <h1 class="text-sm font-semibold line-clamp-1">
        {{ name }}
      </h1>

      <p class="text-sm text-gray line-clamp-1">
        {{ description }}
      </p>

    </div>

  </NuxtLink>

</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
