<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { t, locale } = useI18n();

const head = useLocaleHead({
  key: 'id',
});

const lang = computed(() => unref(head).htmlAttrs?.lang);
const dir = computed(
  () => unref(head).htmlAttrs?.dir as 'ltr' | 'rtl' | 'auto',
);

useSeoMeta({
  title: t('meta.home.title'),
  ogTitle: t('meta.home.ogTitle'),
  description: t('meta.home.description'),
  ogDescription: t('meta.home.ogDescription'),
});

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
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
  <UApp :locale="locales[locale]">
    <div
      class="flex min-h-screen flex-col text-neutral-500 selection:bg-primary-300 selection:text-primary-900 text-pretty dark:text-neutral-400"
    >
      <NuxtLayout>
        <Navbar />
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
