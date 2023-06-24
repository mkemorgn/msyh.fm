<template>
    <div class="container mx-auto pt-20">
        <ul class="w-full flex space-x-20 place-content-center">
            <li class="border-2 border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a>Home</a>
            </li>

            <li class="group dropdown cursor-pointer border-2 border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a>Experience</a>
                <div class="group-hover:block dropdown-menu pt-6 absolute hidden h-auto">
                    <ul class="top-o w-48 bg-white">
                        <li class="py-1"><a>Events</a></li>
                        <li class="py-1"><a>Crash The Decks</a></li>
                        <li class="py-1"><a>Festival</a></li>
                    </ul>
                </div>
            </li>

            <li class="border-2 border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                Shop
            </li>

            <li class="group dropdown cursor-pointer border-2 border-black bg-white-500 text-black font-bold py-2 px-20 rounded-full">
                <a>Learn</a>
                <div class="group-hover:block dropdown-menu pt-6 absolute hidden h-auto">
                    <ul class="top-o w-48 bg-white">
                        <li class="py-1"><a>About Us</a></li>
                        <li class="py-1"><a>The Team</a></li>
                        <li class="py-1"><a>Our partners</a></li>
                        <li class="py-1"><a>How To Apply</a></li>
                    </ul>
                </div>
            </li>

            <li class="group dropdown cursor-pointer bg-orange-500 text-black font-bold py-2 px-20 rounded-full">
                <a>Support</a>
                <div class="group-hover:block dropdown-menu pt-6 absolute hidden h-auto">
                    <ul class="top-o w-48 bg-white">
                        <li class="py-1"><a>Subscribe</a></li>
                        <li class="py-1"><a>Donate</a></li>
                        <li class="py-1"><a>The Mission</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
