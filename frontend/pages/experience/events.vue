<script setup>
const { data:events } = await useFetch('http://127.0.0.1:8000/events/')
</script>

<template>
    <div class="grid grid-cols-2 gap-5">
        <div class="grid grid-rows-3 grid-flow-col container" v-for="e in events">

            <img class="row-span-3 col-span-2" :src="e.event_flyer"/>

            <div class="text-2xl font-bold col-span-2 -ml-32">
                {{ e.event_title }}
            </div>

            <div class="text-xl col-span-2 -mt-16 -ml-32">
                {{ e.event_details }}
            </div>

            <div class="text-lg font-bold col-span-2 -mt-32 -ml-32">
                {{ e.event_date }} | {{ e.event_time }}
            </div>
        </div>
    </div>
</template>
