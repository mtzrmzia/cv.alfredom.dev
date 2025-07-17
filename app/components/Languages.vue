<script setup lang="ts">
defineOptions({
  name: 'Languages',
});

const { t } = useI18n();
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2
      class="text-xl font-bold print:text-black text-neutral-800 dark:text-neutral-200"
    >
      {{ t('languages.title') }}
    </h2>
    <span
      class="inline-flex items-center gap-x-1 font-semibold leading-none print:text-black text-neutral-800 dark:text-neutral-200"
    >
      Inglés
      <UBadge color="neutral" variant="soft"> B1</UBadge>
    </span>
    <span
      class="inline-flex items-center gap-x-1 font-semibold leading-none print:text-black text-neutral-800 dark:text-neutral-200"
    >
      Español
      <UBadge color="neutral" variant="soft"> Nativo</UBadge>
    </span>
  </section>
</template>
