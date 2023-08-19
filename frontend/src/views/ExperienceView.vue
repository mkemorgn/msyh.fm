<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-2 w-full place-content-center">
      <div class="justify-items-start">
        <img class="w-60 pl-5" src="../assets/logos/make_sure_you_have_fun.svg">
      </div>
      <div class="flex justify-end px-20 py-5">
        <ul class="flex flex-row space-x-5">
          <li class="flex flex-nowrap justify-center border-2 italic border-black bg-white-500 text-black font-bold h-12 px-20 rounded-full">
              <a class="absolute p-2">Log-In</a>
          </li>
          <li class="flex flex-nowrap justify-center border-1 border-black bg-orange-500 px-60 text-black font-bold h-12 rounded-full">
            <p class="absolute">&#9654 NOW PLAYING SIDE A SIDE B W/ NAEM|4:00-5:00</p>
          </li>
        </ul>
      </div>
    </div>

    <NavBar />

    <div class="container mx-auto pt-56 grid grid-cols-2 gap-20">

      <div class="container mx-auto">
        <div class="container flex space-x-5 mx-auto">
          <p class="basis-1/2">Photo</p>
          <div class="flex flex-col">
            <h1 class="p-5">Title</h1>
            <h2 class="p-5">Subtitle</h2>
            <h3 class="p-5">Date</h3>
          </div>
        </div>

        <div class="container mx-auto">
          <ul class="flex space-x-8 place-content-end">
            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a href="#">Tickets</a>
            </li>

            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="container flex space-x-5 mx-auto">
          <p class="basis-1/2">Photo</p>
          <div class="flex flex-col">
            <h1 class="p-5">Title</h1>
            <h2 class="p-5">Subtitle</h2>
            <h3 class="p-5">Date</h3>
          </div>
        </div>

        <div class="container mx-auto">
          <ul class="flex space-x-8 place-content-end">
            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a>Tickets</a>
            </li>

            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a>Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="container flex space-x-5 mx-auto">
          <p class="basis-1/2">Photo</p>
          <div class="flex flex-col">
            <h1 class="p-5">Title</h1>
            <h2 class="p-5">Subtitle</h2>
            <h3 class="p-5">Date</h3>
          </div>
        </div>

        <div class="container mx-auto">
          <ul class="flex space-x-8 place-content-end">
            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a>Tickets</a>
            </li>

            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a>Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="container flex space-x-5 mx-auto">
          <p class="basis-1/2">Photo</p>
          <div class="flex flex-col">
            <h1 class="p-5">Title</h1>
            <h2 class="p-5">Subtitle</h2>
            <h3 class="p-5">Date</h3>
          </div>
        </div>

        <div class="container mx-auto">
          <ul class="flex space-x-8 place-content-end">
            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a>Tickets</a>
            </li>

            <li class="border-1 border-black bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
              <a>Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
  </main>
</template>
