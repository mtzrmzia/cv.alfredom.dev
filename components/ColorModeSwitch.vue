<script setup lang="ts">
defineOptions({
  name: 'ThemeSwitch',
});

const colorMode = useColorMode();
const { t } = useI18n();

const iconMode = computed(() => {
  if (colorMode.unknown) return '';
  return colorMode.value === 'dark' ? 'i-ph-moon-duotone' : 'i-ph-sun-duotone';
});

const toolTipTextMode = computed((): string => {
  if (colorMode.unknown) return '';

  return colorMode.value === 'dark'
    ? t('navbar.colorModeSwitch.tooltipTextLight')
    : t('navbar.colorModeSwitch.tooltipTextDark');
});

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <ClientOnly>
    <UTooltip :text="toolTipTextMode">
      <UButton
        :icon="iconMode"
        size="md"
        color="neutral"
        variant="ghost"
        @click="toggleTheme"
      />
    </UTooltip>
  </ClientOnly>
</template>
