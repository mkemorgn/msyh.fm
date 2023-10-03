<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <UIButtonButton>
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </UIButtonButton>
</template>

<style scoped>
div:has(a.router-link-active) {
  @apply text-white;
  @apply bg-brand;
}
</style>
