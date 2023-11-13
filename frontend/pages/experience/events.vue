<script setup>
const { data:events } = await useFetch('http://127.0.0.1:8000/events/')
</script>

<template>
    <div class="grid grid-cols-2 gap-5">
        <div class="grid grid-rows-4 grid-flow-col gap-5" v-for="e in events">
            <div class="row-span-4 col-span-2 pr-16">
                <img :src="e.event_flyer"/>
            </div>

            <div class="col-span-2 -ml-28">
                <div class="text-2xl font-bold">
                    {{ e.event_title }}
                </div>

                <div class="text-xl">
                    {{ e.event_details }}
                </div>

                <div class="text-lg font-bold">
                    {{ e.event_date }} | {{ e.event_time }}
                </div>
            </div>

            <div class="text-lg font-bold -ml-32 ">
                <ButtonButton class="float-left" variant="inverse">Tickets</ButtonButton>
                <ButtonButton class="float-right -ml-10" variant="inverse">Facebook</ButtonButton>
            </div>
        </div>
    </div>
</template>
