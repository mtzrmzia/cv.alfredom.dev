<script setup lang="ts">
defineOptions({
  name: 'Navbar',
});
</script>

<template>
  <header
    class="sticky top-0 z-10 flex print:hidden h-16 items-center bg-white/75 px-4 backdrop-blur-lg dark:bg-neutral-900/75 sm:px-6 lg:px-8"
  >
    <div
      class="mx-auto flex w-full max-w-screen-lg items-center justify-end gap-2"
    >
      <ColorModeSwitch />
      <LangSwitch />
      <PrintButton />
    </div>
  </header>
</template>
