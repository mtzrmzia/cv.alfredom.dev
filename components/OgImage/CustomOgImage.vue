<template>
  <div
    class="flex flex-col justify-between bg-white px-24 py-20 font-sans text-black"
    :style="dottedBg"
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

const dottedBg =
  "background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e5e5e5' /%3E%3C/svg%3E\"); background-size: 20px 20px;";
</script>
