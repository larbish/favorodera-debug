<template>

  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">

    <div class="min-w-37.5 flex items-center gap-2 lg:sticky lg:top-10">

      <i class="i-hugeicons-user" />

      <h1 class="text-sm font-semibold">
        ABOUT ME
      </h1>

    </div>

    <p class="text-sm text-gray font-normal tracking-widest break-keep hyphens-auto">
      <ContentSlot
        :use="$slots.default"
        unwrap="p"
      />
    </p>

  </section>

</template>
