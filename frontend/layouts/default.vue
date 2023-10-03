<template>
  <div
    id="main-content-wrapper"
    className="grid min-h-full w-full"
  >
    <NavBar />
    <main class="h-full w-full">
      <ContainerWrap>
        <slot />
      </ContainerWrap>

      <TheFooter />
    </main>
  </div>
</template>

<style scoped>
#main-content-wrapper {
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';
}

#main-content-wrapper > main {
  grid-area: main;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
}

#main-content-wrapper footer {
  grid-area: 2 / 1 / 3 / 4;
}
</style>
