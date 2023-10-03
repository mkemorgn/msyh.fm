<script setup lang="ts">
defineProps({
  tagName: {
    type: String,
    required: false,
    default: 'div',
  },
});
</script>
<template>
  <component
    :is="tagName"
    class="container mx-auto"
  >
    <slot />
  </component>
</template>
