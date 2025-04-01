<script setup lang="ts">
const { t } = useI18n();
useHead({
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon.png',
    },
  ],
});
</script>

<template>
  <UApp>
    <main
      class="md:p-16 mx-auto overflow-auto p-4 print:p-12 relative scroll-my-12 dark:text-neutral-200 text-neutral-800 selection:bg-primary-300 selection:text-primary-900"
    >
      {{ t('intro.summary') }}
    </main>
  </UApp>
</template>
