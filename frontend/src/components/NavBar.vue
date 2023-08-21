<template>
    <div class="mx-auto">
        <div class="grid grid-cols-2 w-full place-content-center">
        <div class="justify-items-start">
            <img class="w-60 h-60 pl-5" src="../assets/logos/make_sure_you_have_fun.svg">
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
        <ul class="w-full flex space-x-20 place-content-center">
            <li class="border-2 italic border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a href="/experience">HOME</a>
            </li>

            <li class="group italic cursor-pointer border-2 border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a>EXPERIENCE</a>
                <div class="group-hover:block italic p-5 absolute content-start hidden h-auto">
                    <ul class="border-2 border-black px-6 py-8 rounded-lg bg-white">
                        <li class="px-2 py-1 font-normal"><a href="/events">EVENTS</a></li>
                        <li class="px-2 py-1 font-normal"><a>CRASH THE DECKS</a></li>
                        <li class="px-2 py-1 font-normal"><a>FESTIVAL</a></li>
                    </ul>
                </div>
            </li>

            <li class="border-2 border-black bg-white-500 text-black italic font-bold py-2 px-20 rounded-full">
                SHOP
            </li>

            <li class="group cursor-pointer border-2 border-black bg-white-500 italic text-black font-bold py-2 px-20 rounded-full">
                <a>LEARN</a>
                <div class="group-hover:block pt-6 absolute hidden italic h-auto">
                    <ul class="top-o w-48 bg-white">
                        <li class="py-1 font-normal"><a href="/blog">BLOG</a></li>
                        <li class="py-1 font-normal"><a href="/about">ABOUT US</a></li>
                        <li class="py-1 font-normal"><a>THE TEAM</a></li>
                        <li class="py-1 font-normal"><a>OUR PARTNERS</a></li>
                        <li class="py-1 font-normal"><a>HOW TO APPLY</a></li>
                    </ul>
                </div>
            </li>

            <li class="group cursor-pointer bg-orange-500 italic text-black font-bold py-2 px-20 rounded-full">
                <a>SUPPORT</a>
                <div class="group-hover:block pt-6 absolute hidden h-auto">
                    <ul class="top-o w-48 bg-white">
                        <li class="py-1 font-normal"><a>SUBSCRIBE</a></li>
                        <li class="py-1 font-normal"><a>DONATE</a></li>
                        <li class="py-1 font-normal"><a>THE MISSION</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
