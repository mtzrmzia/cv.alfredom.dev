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
  title: t('meta.title'),
  ogTitle: t('meta.ogTitle'),
  description: t('meta.description'),
  ogDescription: t('meta.ogDescription'),
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
defineOgImageComponent('CustomOgImage', {
  title: t('meta.title'),
  description: t('meta.description'),
});
</script>

<template>
  <UApp :locale="locales[locale]">
    <div
      class="flex min-h-screen flex-col selection:bg-primary-300 selection:text-primary-900 text-pretty"
    >
      <Navbar />
      <NuxtPage />
    </div>
  </UApp>
</template>
