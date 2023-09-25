<script setup lang="ts">
const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Experience',
    path: '/experience',
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'Learn',
    path: '/learn',
  },
  {
    name: 'Support',
    path: '/support',
  },
];
</script>
<template>
  <nav class="grid grid-cols-12">
    <!-- logo - 2/12 of page -->
    <div class="col-span-2 md:col-span-2 lg:col-span-2">
      <NuxtLink to="/">
        <img
          class="aspect-square w-52"
          src="~/assets/logos/make_sure_you_have_fun.svg"
          alt="logo"
        />
      </NuxtLink>
    </div>
    <!-- nav links - 8/12 of page -->
    <div class="col-span-10 py-6">
      <div class="flex flex-col">
        <div class="flex w-full justify-end gap-4">
          <ButtonLink :to="'/login'">Log-In</ButtonLink>
          <div
            class="flex items-center justify-center rounded-full bg-brand px-4 py-2 font-bold text-black"
          >
            NOW PLAYING SIDE A SIDE B W/ NAEM|4:00-5:00
          </div>
        </div>
        <!-- nav links  -->
        <div class="mt-4 flex flex-wrap justify-evenly gap-4">
          <div
            v-for="route in routes"
            :key="route.name"
          >
            <ButtonLink :to="route.path">{{ route.name }}</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
