<script setup lang="ts">
defineOptions({
  name: 'Skills',
});

const { t } = useI18n();

const skills = [
  'HTML',
  'CSS/SASS',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'Vue/Nuxt',
  'Webpack/Vite',
  'Cypress',
  'Jest/Vitest',
  'NodeJs',
  'PHP/Laravel',
  'Git',
  'Vercel',
];

const configUI = {
  base: 'print:text-black print:ring-1 print:ring-black',
  label: 'print:text-black',
  leadingIcon: 'print:text-black',
  trailingIcon: 'print:text-black',
};
</script>
<template>
  <section class="flex flex-col gap-y-3">
    <h2
      class="text-xl font-bold print:text-black text-neutral-800 dark:text-neutral-200"
    >
      {{ t('skills.title') }}
    </h2>
    <div class="flex flex-wrap gap-1">
      <UBadge
        v-for="(skill, index) in skills"
        :key="index"
        :ui="configUI"
        color="neutral"
        variant="outline"
      >
        {{ skill }}
      </UBadge>
    </div>
  </section>
</template>
