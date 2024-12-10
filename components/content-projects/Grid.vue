<template>

  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">

    <div class="min-w-37.5 flex items-center gap-2 lg:sticky lg:top-20">

      <ProjectsSelect
        v-model="selectedTag"
        :options="tags"
      />

    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

      <template v-if="projects && status === 'success'">

        <ComponentProjectsCard
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :path="`/projects/${project.id}`"
          :image="project.image"
          :description="project.description"
        />

      </template>

      <template v-if="status === 'pending' || status === 'idle'">

        <ComponentSkeleton
          v-for="n in 6"
          :key="n"
          class="min-h-17rem rounded-4"
        />

      </template>

      <template v-else-if="projects < 1 && status === 'success'">

        <div class=" col-span-2 w-full b-1 b-yellow-500/60 rounded b-solid bg-yellow-500/5 px-3.5 py-2.5">

          <p class="text-sm text-yellow-500">
            I haven't built anything yet, weird isn't it? 🤨
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

    </div>

  </section>

</template>

<script setup lang="ts">
const tags = [
  'All',
  'AI',
  'Tools',
  'Personal',
  'Landing Pages',
  'Templates',
  'Libraries',
  'Packages',
]

const selectedTag = ref('All')

const { data: projects, status, error } = await useLazyAsyncData(
  `projects-${selectedTag.value}`,
  () => queryContent('/projects')
    .where({ _type: 'markdown', tags: { $contains: selectedTag.value } })
    .sort({ _file: -1, $numeric: true })
    .find(),
  { server: false, watch: [selectedTag] },
)
</script>
