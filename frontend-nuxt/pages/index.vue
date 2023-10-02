<script setup>
definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex h-3/4 items-stretch justify-center space-x-16 py-72">
      <div class="group relative flex h-full items-center justify-center">
        <NuxtLink
          class="absolute top-1/4 z-0 translate-y-full transition-transform group-hover:-translate-x-40 group-hover:-translate-y-40"
          to="/experience"
        >
          <div class="p-6 text-xl font-bold text-brand">EXPERIENCE</div>
        </NuxtLink>

        <div class="z-10 aspect-square w-96 rounded-full bg-white p-12">
          <img
            class="pointer-events-none h-full w-full"
            src="~/assets/logos/make_sure_you_have_fun.svg"
            alt="logo"
          />
        </div>
      </div>

      <div class="w-2 rounded-full bg-brand" />

      <div class="group relative flex h-full items-center justify-center">
        <NuxtLink
          class="absolute bottom-1/4 z-0 translate-y-full transition-transform group-hover:translate-x-40 group-hover:translate-y-40"
          to="/shop"
        >
          <div class="p-6 text-xl font-bold text-brand">RADIO</div>
        </NuxtLink>
        <div class="z-10 aspect-square w-96 rounded-full bg-white p-12">
          <img
            class="pointer-events-none z-10 h-full w-full"
            src="~/assets/logos/msyhfm_logo.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
