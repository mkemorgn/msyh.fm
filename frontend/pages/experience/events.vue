<script setup>
const { data:events } = await useFetch('http://127.0.0.1:8000/events/')
</script>

<template>
    <div class="grid grid-cols-2 gap-5">
        <div class="grid grid-rows-4 grid-flow-col gap-10 container" v-for="e in events">

            <div class="row-span-4 col-span-2 pr-16">
                <img :src="e.event_flyer"/>
            </div>

            <div class="text-2xl font-bold col-span-2 -ml-32">
                {{ e.event_title }}
            </div>

            <div class="text-xl col-span-2 -mt-16 -ml-32">
                {{ e.event_details }}
            </div>

            <div class="text-lg font-bold col-span-2 -mt-32 -ml-32">
                {{ e.event_date }} | {{ e.event_time }}
            </div>

            <div class="text-lg -mt-44 -ml-32">
                <ButtonButton class="float-left" variant="inverse">Tickets</ButtonButton>
                <ButtonButton class="float-right" variant="inverse">Facebook</ButtonButton>
            </div>
        </div>
    </div>
</template>
