<template>

  <template v-if="project && status === 'success' || status === 'idle' || status === 'pending'">

    <div class="w-full flex flex-col gap-y-4">

      <div class="w-full aspect-video max-h-[25rem] overflow-hidden b b-gray/20 rounded-4">

        <img
          v-if="status === 'success'"
          :src="project?.image"
          :alt="project?.name"
          class="size-full"
          loading="lazy"
        >

        <ComponentSkeleton
          v-else
          class="min-h-25rem rounded-4"
        />

      </div>

      <div class="w-full flex flex-col gap-y-8 text-sm">

        <div class="w-full flex flex-col gap-2 items-start lg:flex-row lg:gap-4">

          <div class="min-w-37.5 flex items-center gap-2 text-blue-500 font-medium">

            <i class="i-hugeicons-folder-01 size-5" />
            <p>Name</p>

          </div>

          <p v-if="status === 'success'">
            {{ project?.name }}
          </p>

          <div
            v-else
            class="w-full flex gap-4"
          >

            <ComponentSkeleton
              class="h-4 max-w-[20%] rounded-4"
            />

            <ComponentSkeleton
              class="h-4 max-w-2rem rounded-4"
            />

          </div>

        </div>

        <div class="w-full flex flex-col gap-2 items-start lg:flex-row lg:gap-4">

          <div class="min-w-37.5 flex items-center gap-2 text-orange-400 font-medium">

            <i class="i-hugeicons-text-align-left-01 size-5" />
            <p>Description</p>

          </div>

          <ContentRenderer
            v-if="status === 'success'"
            :value="project as ParsedContent"
            class="w-full overflow-x-auto "
          />

          <div
            v-else
            class="w-full flex flex-col gap-4"
          >

            <ComponentSkeleton
              class="h-4 max-w-[80%] rounded-4"
            />

            <ComponentSkeleton
              class="h-4 max-w-[60%] rounded-4"
            />

            <ComponentSkeleton
              class="h-4 max-w-[40%] rounded-4"
            />

            <ComponentSkeleton
              class="h-4 max-w-[20%] rounded-4"
            />

          </div>

        </div>

        <div class="w-full flex flex-col gap-2 items-start lg:flex-row lg:gap-4">

          <div class="min-w-37.5 flex items-center gap-2 text-purple-400 font-medium">

            <i class="i-hugeicons-code size-5" />
            <p>Technologies</p>

          </div>

          <div class="w-full flex flex-wrap gap-2">

            <template v-if="status === 'success'">

              <p
                v-for="technology in project?.technologies"
                :key="technology"
                class="rounded bg-container px-2 py-1 text-2.5 font-semibold tracking-widest"
              >
                {{ technology }}
              </p>

            </template>

            <template v-else>

              <ComponentSkeleton
                v-for="n in 6"
                :key="n"
                class="h-8 max-w-16 rounded"
              />

            </template>

          </div>

        </div>

        <div class="w-full flex flex-col gap-2 items-start lg:flex-row lg:gap-4">

          <div
            class="min-w-37.5 flex items-center gap-2 font-medium"
            :class="{
              'text-green-500': project?.status === 'Production',
              'text-red-500': project?.status === 'Issues',
              'text-orange-400': project?.status === 'Development',
            }"
          >

            <i
              :class="{
                'i-hugeicons-checkmark-circle-02': project?.status === 'Production',
                'i-hugeicons-alert-circle': project?.status === 'Issues',
                'i-hugeicons-computer-programming-01': project?.status === 'Development',
              }"
              class="size-5 i-hugeicons-clock-01"
            />

            <p>Status</p>

          </div>

          <p v-if="status === 'success'">
            {{ project?.status }}
          </p>

          <ComponentSkeleton
            v-else
            class="h-4 max-w-[30%] rounded-4"
          />

        </div>

        <div class="w-full flex flex-col gap-2 items-start lg:flex-row lg:gap-4">

          <div class="min-w-37.5 flex items-center gap-2 text-teal-500 font-medium">

            <i class="i-hugeicons-clock-01 size-5" />
            <p>Created</p>

          </div>

          <p v-if="status === 'success'">
            {{ project?.created }}
          </p>

          <ComponentSkeleton
            v-else
            class="h-4 max-w-[30%] rounded-4"
          />

        </div>

        <div
          v-if="project?.links"
          class="w-full h-px bg-gray/25"
        />

        <div
          v-if="project?.links"
          class="w-full flex flex-col gap-2 items-start lg:flex-row lg:gap-4"
        >

          <div class="min-w-37.5 flex items-center gap-2 text-blue-700 font-medium">

            <i class="i-hugeicons-file-attachment size-5" />
            <p>Link Access</p>

          </div>

          <div class="w-full flex flex-1 flex-col gap-2">

            <NuxtLink
              v-if="project?.links?.repository"
              :to="project?.links?.repository"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 b b-gray rounded-md bg-transparent px-4 py-2 duration-1000 delay-50 ease property-all hover:bg-gray/15 "
            >
              <i class="i-hugeicons-github size-5" />
              <p>Repository</p>
            </NuxtLink>

            <NuxtLink
              v-if="project?.links?.live"
              :to="project?.links?.live"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-2 b b-gray rounded-md bg-transparent px-4 py-2 duration-1000 delay-50 ease property-all hover:bg-gray/15 "
            >
              <i class="i-hugeicons-link-square-02 size-5" />
              <p>Live Site</p>
            </NuxtLink>

          </div>

        </div>

      </div>

    </div>

  </template>

  <template v-else-if="error">

    <template v-if="error?.message.includes('404 Document not found!')">

      <div
        class="col-span-2 b-1 b-yellow-500/60 rounded b-solid bg-yellow-500/5 px-3.5 py-2.5"
      >

        <p class="text-xs text-yellow-500">
          Oops!! 🫢 Project not found.
          I haven't built this project yet check the name and try again.
        </p>

      </div>

    </template>

    <template v-else>

      <div
        class="col-span-2 b-1 b-red-500/60 rounded b-solid bg-red-500/5 px-3.5 py-2.5"
      >

        <p class="text-xs text-red-500">
          Oops!! 🫢 Network error.
          There's something wrong with your network. Please check your internet connection and try again.
        </p>

      </div>

    </template>

  </template>

</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { projectId } = useRoute().params

const { data: project, status, error } = await useLazyAsyncData(
  `${projectId}`,
  () => queryContent(`/projects/${projectId}`)
    .where({ _type: 'markdown', id: { $eq: `${projectId}` } })
    .findOne(),
  { server: false },
)
</script>
