<template>
    <div class="container mx-auto pt-20">
        <ul class="w-full flex space-x-20 place-content-center">
            <li class="border-2 italic border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a>HOME</a>
            </li>

            <li class="group italic cursor-pointer border-2 border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a>EXPERIENCE</a>
                <div class="group-hover:block italic absolute hidden h-auto">
                    <ul class="flex-col w-auto border-2 border-black px-6 py-8  rounded-lg bg-white">
                        <li class="px-2 py-1 font-normal"><a>EVENTS</a></li>
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
                        <li class="py-1 font-normal"><a>ABOUT US</a></li>
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
