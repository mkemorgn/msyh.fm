<script setup lang="ts">
const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Experience',
    path: '/experience',
    // festival and tours won't be apart of v1
    children: [
      { name: 'Events', path: '/experience/events' },
      { name: 'Crash the Decks', path: '/experience/crash-the-decks' },
      //{ name: 'Festival', path: '/experience/festival' },
      //{ name: 'Tours', path: '/experience/tours' },
    ],
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'Learn',
    path: '/learn',
    children: [
      { name: 'Blog', path: '/learn/blog' },
      { name: 'About Us', path: '/learn/about-us' },
      { name: 'The Team', path: '/learn/team' },
      { name: 'Our Partners', path: '/learn/partners' },
      { name: 'Apply', path: '/learn/apply' },
    ],
  },
  {
    name: 'Support',
    path: '/support',
    children: [
      // mission won't be apart of v1
      { name: 'Donate', path: '/support/donate' },
      { name: 'Subscribe', path: '/support/subscribe' },
      //{ name: 'Mission', path: '/support/mission' },
    ]
  },
];
// Function to return external link for 'Crash the Decks'
const externalLink = (route: any): string | undefined => {
  if (route.name === 'Crash the Decks') {
    return 'https://www.crashthedecks.com';
  }
  return undefined;
};
</script>
<template>
  <ContainerWrap>
    <nav class="z-50 grid grid-cols-12">
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
            <UIButtonLink :to="'/login'">Log-In</UIButtonLink>
            <div
              class="flex items-center justify-center rounded-full bg-brand px-4 py-2 font-bold text-black"
            >
              NOW PLAYING SIDE A SIDE B W/ NAEM|4:00-5:00
            </div>
          </div>
          <!-- nav links  -->
          <div class="mt-4 flex flex-wrap justify-between gap-4">
            <div
              v-for="route in routes"
              :key="route.name"
            >
              <NavButton
                :path="route.path"
                :title="route.name"
                :childLinks="route.children"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </ContainerWrap>
</template>
