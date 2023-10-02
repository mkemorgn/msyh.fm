<script setup lang="ts">
type Link = {
  name: string;
  path: string;
};
const { path, childLinks } = defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  childLinks: {
    type: Array as PropType<Link[]>,
    required: false,
    default: () => [],
  },
});

let isActive = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  newVal => {
    console.log('newVal', newVal);
    isActive.value = path !== '/' && newVal.includes(path);
  },
  { immediate: true }
);

const buttonClass = computed(() => {
  return `${
    isActive.value ? 'bg-brand text-white font-bold' : 'bg-white text-brand'
  } ${
    childLinks.length > 0
      ? 'group rounded-full hover:rounded-2xl'
      : 'rounded-full'
  }`;
});
</script>

<template>
  <div
    class="w-48 place-items-center border-2 border-black px-4 py-1 text-center italic"
    :class="buttonClass"
  >
    <NuxtLink :to="path">
      {{ title }}
    </NuxtLink>

    <div v-if="childLinks.length > 0">
      <div
        v-for="link in childLinks"
        :key="link.name"
        class="hidden w-full cursor-pointer place-items-center rounded-full text-center italic hover:font-bold group-hover:block"
      >
        <NuxtLink :to="link.path">
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
