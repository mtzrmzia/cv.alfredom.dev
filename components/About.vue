<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold dark:text-neutral-200 text-neutral-800">
      {{ t('about.title') }}
    </h2>
    <p class="font-mono text-sm">
      {{ t('about.text') }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'About',
});

const { t } = useI18n();
</script>
