<script setup lang="ts">
const props = defineProps({
  onClick: {
    type: Function,
    required: false,
  },
  variant: {
    type: String,
    required: false,
    default: 'default',
  },
});
const button = ref(null);

const handleClick = () => {
  // if no onClick prop
  // check for child component 'a' tag and call click() on it
  if (!props.onClick) {
    // @ts-ignore
    const a = button?.value.querySelector('a');
    a && a.click();
  }
};
</script>
<template>
  <div
    ref="button"
    @click="handleClick"
    class="grid w-48 cursor-pointer place-items-center rounded-full border-2 px-4 py-1 font-bold italic"
    :class="{
      'border-black bg-white text-black hover:bg-brand hover:text-white':
        variant === 'default',
      'border-white bg-brand text-white hover:bg-white hover:text-black':
        variant === 'inverse',
    }"
  >
    <slot />
  </div>
</template>
