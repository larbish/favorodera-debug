<template>

  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">

    <div class="min-w-37.5 flex items-center gap-2 lg:sticky lg:top-10">

      <i class="i-hugeicons-graduation-scroll" />

      <h1 class="text-sm font-semibold">
        EDUCATION
      </h1>

    </div>

    <div class="w-full flex flex-col gap-4">

      <template v-if="education && status === 'success'">

        <div
          v-for="(educationItem, index) in education"
          :key="index"
          class="w-full flex flex-col gap-y-1.5 rounded-4 bg-container p-4 shadow-2xl"
        >

          <p class="text-gray text-sm tracking-widest">
            {{ educationItem.certification }} - {{ educationItem.course }}.
          </p>

          <NuxtLink
            :to="educationItem.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-max flex gap-2 text-sm font-semibold decoration-none tracking-widest"
            :class="{
              'hover:decoration-underline': educationItem.url,
            }"
          >

            <p>{{ educationItem.institution }}</p>

            <i
              v-if="educationItem.url"
              class="i-hugeicons-arrow-right-02 size-6"
            />

          </NuxtLink>

          <p class="text-xs text-gray tracking-widest">

            from

            <span class="text-sm text-white font-semibold">
              {{ educationItem.started }}
            </span>

            to

            <span class="text-sm text-white font-semibold">
              {{ educationItem.ended }}
            </span>

          </p>

          <p class="text-sm text-gray tracking-widest b-t b-t-gray mt-1.5 pt-4 break-keep hyphens-auto">
            {{ educationItem.description }}
          </p>

        </div>

      </template>

      <template v-else-if="error">

        <div
          class="col-span-2 b-1 b-red-500/60 rounded b-solid bg-red-500/5 px-3.5 py-2.5"
        >

          <p class="text-xs text-red-500">
            Oops!! 🫢 Network error.
            There's something wrong with your network. Please check your internet connection and try again.
          </p>

        </div>

      </template>

      <template v-else>

        <ComponentSkeleton
          v-for="n in 2"
          :key="n"
          class="min-h-17rem rounded-4"
        />

      </template>

    </div>

  </section>

</template>

<script setup lang="ts">
const { data: education, error, status } = await useLazyAsyncData(
  'education',
  () => queryContent('/education')
    .where({ _type: 'markdown' })
    .sort({ _file: -1, $numeric: true })
    .find(),
  { server: false },
)
</script>
