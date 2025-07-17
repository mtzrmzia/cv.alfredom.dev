<script setup lang="ts">
defineOptions({
  name: 'PrintButton',
});

const { t } = useI18n();

const printPage = () => {
  window.print();
};
</script>

<template>
  <UTooltip :text="t('navbar.printButton.tooltipText')">
    <UButton
      icon="i-ph-printer-duotone"
      size="md"
      color="neutral"
      variant="ghost"
      @click="printPage"
    />
  </UTooltip>
</template>
