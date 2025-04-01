<script setup lang="ts">
defineOptions({
  name: 'Index',
});

const { t } = useI18n();
</script>

<template>
  <main class="md:p-16 p-4 print:p-12">
    {{ t('intro.summary') }}
  </main>
</template>
