<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold text-neutral-800 dark:text-neutral-200">
      {{ t('education.title') }}
    </h2>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3
            class="font-semibold leading-none text-neutral-800 dark:text-neutral-200"
          >
            {{ t('education.school') }}
          </h3>
          <span class="text-sm tabular-nums">2015 -2019</span>
        </div>
      </div>
      <div class="mt-2 font-mono text-sm">
        {{ t('education.career') }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Education',
});

const { t } = useI18n();
</script>
