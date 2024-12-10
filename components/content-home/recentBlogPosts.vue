<template>

  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">

    <div class="min-w-37.5 flex items-center gap-2 lg:sticky lg:top-10">

      <i class="i-hugeicons-graduation-scroll" />

      <h1 class="text-sm font-semibold">
        RECENT POSTS
      </h1>

    </div>

    <div class="w-full flex flex-col gap-4">

      <template v-if="recentBlogPosts && status === 'success'">

        <ComponentBlogPostCard
          v-for="recentBlogPost in recentBlogPosts"
          :key="recentBlogPost.id"
          :title="recentBlogPost.title!"
          :summary="recentBlogPost.summary"
          :date="recentBlogPost.date"
          :path="`/blogs/${recentBlogPost.id}`"
        />

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

      <template v-if="recentBlogPosts && status === 'success'">

        <button
          type="button"
          class="flex items-center w-max self-end gap-x-2 text-sm font-semibold bg-container rounded-md py-1 px-3 property-all duration-500 hover:bg-container/50"
          @click="navigateTo('/blogs')"
        >

          View More
          <i class="i-hugeicons-arrow-right-02 size-6" />

        </button>

      </template>

      <template v-else-if="!error">

        <ComponentSkeleton
          class="h-8 max-w-[8.65rem] self-end rounded-2"
        />

      </template>

    </div>

  </section>

</template>

<script setup lang="ts">
const { data: recentBlogPosts, status, error } = await useLazyAsyncData(
  'recent-blog-posts',
  () => queryContent('/blog')
    .where({ _type: 'markdown', id: { $exists: true } })
    .sort({ _file: -1, $numeric: true })
    .limit(2)
    .find(),
  { server: false },
)
</script>
