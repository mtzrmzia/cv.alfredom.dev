<script setup lang="ts">
defineOptions({
  name: 'Index',
});

const { t } = useI18n();
</script>

<template>
  <main class="print:p-12 px-4">
    <section class="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
      <Intro />
      <About />
      <WorkExperience />
      <Education />
    </section>
  </main>
</template>
