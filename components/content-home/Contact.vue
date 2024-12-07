<template>

  <section class="w-full flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">

    <div class="min-w-37.5 flex items-center gap-2 lg:sticky lg:top-10">

      <i class="i-hugeicons-contact" />

      <h1 class="text-sm font-semibold">
        CONTACT
      </h1>

    </div>

    <div class="w-full flex flex-col gap-4">

      <template v-if="contact.length > 0">

        <div
          v-for="(contactItem, index) in contact"
          :key="index"
          class="w-full flex justify-between items-center gap-4"
        >

          <p class="w-max flex shrink-0 gap-1 text-sm font-semibold">

            {{ contactItem.name }}:

            <NuxtLink
              class="w-max text-sm text-gray font-normal decoration-none hover:decoration-underline tracking-widest"
              :to="contactItem.url"
              target="_blank"
              rel="noopener noreferrer"
            >

              {{ contactItem.value }}

            </NuxtLink>

          </p>

          <div class="w-full h-px bg-gray/25" />

          <i :class="`${contactItem.icon} size-5 shrink-0`" />

        </div>

      </template>

    </div>

  </section>

</template>

<script setup lang="ts">
const contact = useAppConfig().profile.contact
</script>
