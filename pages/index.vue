<script setup lang="ts">
defineOptions({
  name: 'Index',
});

const { t } = useI18n();
</script>

<template>
  <main class="p-4 print:p-12">
    <section class="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
      <Intro />
      <About />
    </section>
  </main>
</template>
