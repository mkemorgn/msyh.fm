<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <ButtonButton>
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </ButtonButton>
</template>

<style scoped>
div:has(a.router-link-active) {
  @apply text-white;
  @apply bg-brand;
}
</style>
