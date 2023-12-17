<template>
    <div class="relative container mx-auto">
        <!-- Left arrow for previous page -->
        <button @click="prevPage" :disabled="currentPage <= 0" class="arrow-button left-0">←</button>

        <!-- Main container for the events grid -->
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
            <!-- Individual event container -->
            <div v-for="e in paginatedEvents" :key="e.id" class="min-w-[50%] grid grid-rows-4 grid-flow-col gap-5">
                <!-- Event Image -->
                <div class="row-span-4 col-span-2 pr-16">
                    <img :src="e.event_flyer"/>
                </div>

                <!-- Event Info -->
                <div class="col-span-2 -ml-28">
                    <div class="text-2xl font-bold">{{ e.event_title }}</div>
                    <div class="text-xl">{{ e.event_details }}</div>
                    <div class="text-lg font-bold">{{ e.event_date }} | {{ e.event_time }}</div>
                </div>

                <!-- Event Buttons -->
                <div class="text-lg font-bold -ml-32 ">
                    <ButtonButton class="float-left" variant="inverse">Tickets</ButtonButton>
                    <ButtonButton class="float-right -ml-10" variant="inverse">Facebook</ButtonButton>
                </div>
            </div>
        </div>

        <!-- Right arrow for next page -->
        <button @click="nextPage" :disabled="currentPage >= pageCount - 1" class="arrow-button right-0">→</button>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const localEvents = ref([]);
const currentPage = ref(0);
const eventsPerPage = 4;
const eventsApiUrl = 'http://127.0.0.1:8000/events/';

// Fetching data once on component mount
onMounted(async () => {
    try {
        const response = await axios.get(eventsApiUrl);
        localEvents.value = response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
    }
});

// Computed property for paginated events
const paginatedEvents = computed(() => {
    const start = currentPage.value * eventsPerPage;
    return localEvents.value.slice(start, start + eventsPerPage);
});

// Computed property for page count
const pageCount = computed(() => {
    return Math.ceil(localEvents.value.length / eventsPerPage);
});

// Methods for pagination
function nextPage() {
    if (currentPage.value < pageCount.value - 1) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
}
</script>

<style>
/* Style your arrows and event cards here */
.arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* Other styling as needed */
}
</style>

