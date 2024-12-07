<template>

  <header class="w-full flex flex-col items-center justify-between gap-y-10">

    <time
      :datetime="currentTime"
      class="flex items-center self-end gap-x-2 text-sm font-semibold"
    >
      <i class="i-hugeicons-clock-01 size-5" />

      {{ currentTime ? currentTime : 'CHECKING TIME...' }}

    </time>

    <section class="w-full flex items-end justify-center gap-4 lg:pl-37.5">

      <img
        :src="profile?.avatar"
        :alt="profile?.name"
        class="size-16 rounded-full"
      >

      <div class="flex flex-col gap-2 font-semibold tracking-widest">

        <p class="text-xl uppercase">
          {{ profile?.name }}
        </p>

        <div
          class="flex items-center gap-4 text-xs text-emerald"
          :class="{ 'text-rose': !profile?.available }"
        >

          <div class="flex items-center gap-1">

            <i
              class="size-3 animate-pulse rounded-full bg-emerald"
              :class="{ 'bg-rose': !profile?.available }"
            />

            <p>{{ profile?.available ? 'AVAILABLE' : 'NOT AVAILABLE' }}</p>

          </div>

          <p class="text-gray">
            RESUME
          </p>

        </div>

      </div>

    </section>

  </header>

</template>

<script setup lang="ts">
const currentTime = ref('')
const profile = useAppConfig().profile

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleString('en-US', {
      timeZoneName: 'short',
      timeZone: 'Africa/Lagos',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    })
  }, 1000)
})
</script>
