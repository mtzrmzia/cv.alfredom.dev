<script setup lang="ts">
defineOptions({
  name: 'Navbar',
});
</script>

<template>
  <header class="flex print:hidden h-16 items-center px-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto flex w-full max-w-screen-lg items-center justify-end gap-2"
    >
      <ColorModeSwitch />
      <LangSwitch />
      <PrintButton />
    </div>
  </header>
</template>
