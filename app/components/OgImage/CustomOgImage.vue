<template>
  <div
    class="flex flex-col justify-between bg-white px-24 py-20 font-sans text-black"
  >
    <img
      src="https://ik.imagekit.io/alfredom/avatar/me-dark.png"
      alt="avatar"
      class="h-24 w-24 rounded-full object-cover"
    />
    <div class="flex flex-col gap-2">
      <h1 class="font-extrabold leading-tight text-[64px]">
        {{ title }}
      </h1>
      <p class="leading-snug text-[32px]">{{ description }} <br /></p>
    </div>
    <p class="font-mono text-black text-[28px]">cv.alfredom.dev</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CustomOgImage',
});

withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: 'title',
    description: 'description',
  },
);
</script>
