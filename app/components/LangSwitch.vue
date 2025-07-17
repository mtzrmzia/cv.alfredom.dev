<script setup lang="ts">
defineOptions({
  name: 'LangSwitch',
});

const { locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <UTooltip :text="t('navbar.langSwitch.tooltipText')">
    <UButton
      icon="i-ph-translate-duotone"
      size="md"
      color="neutral"
      variant="ghost"
      :to="switchLocalePath(locale === 'es' ? 'en' : 'es')"
    />
  </UTooltip>
</template>
