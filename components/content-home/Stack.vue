<template>

  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">

    <div class="min-w-37.5 flex items-center gap-2 lg:sticky lg:top-10">

      <i class="i-hugeicons-settings-03" />

      <h1 class="text-sm font-semibold">
        STACK
      </h1>

    </div>

    <div class="w-full flex flex-col gap-4">

      <template v-if="stack.length > 0">

        <h1 class="text-center text-gray font-semibold">
          SOME OF THE TECHNOLOGIES I USE
        </h1>

        <div class="w-full flex flex-wrap items-center gap-2">

          <NuxtLink
            v-for="technology in stack"
            :key="technology.name"
            :to="technology.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center rounded-md bg-container p-2"
          >
            <i
              :class="technology.icon"
              class="size-4 sm:size-8"
            />
          </NuxtLink>

        </div>

      </template>

    </div>

  </section>

</template>

<script setup lang="ts">
const stack = useAppConfig().profile.stack
</script>
