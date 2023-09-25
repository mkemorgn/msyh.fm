<script setup>
definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <div
    class="flex h-screen w-full items-stretch justify-center space-x-16 py-72"
  >
    <div class="group relative">
      <NuxtLink
        class="trans-x-1/2 invisible absolute z-0 group-hover:visible"
        to="/experience"
      >
        EXPERIENCE
      </NuxtLink>
      <img
        class="z-10 aspect-square w-72"
        src="~/assets/logos/make_sure_you_have_fun.svg"
        alt="logo"
      />
    </div>
    <div class="h-full w-2 rounded-full bg-brand" />
    <div class="group relative">
      <NuxtLink
        class="invisible group-hover:visible"
        to="/shop"
      >
        SHOP
      </NuxtLink>
      <img
        class="aspect-square w-72"
        src="~/assets/logos/msyhfm_logo.svg"
        alt="logo"
      />
    </div>
  </div>
</template>
