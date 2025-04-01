<script setup lang="ts">
defineOptions({
  name: 'Navbar',
});
</script>

<template>
  <header class="flex h-16 items-center lg:px-8 px-4 sm:px-6">
    <div
      class="mx-auto w-full max-w-screen-lg flex items-center justify-end gap-2"
    >
      <ColorModeSwitch />
      <LangSwitch />
      <PrintButton />
    </div>
  </header>
</template>
