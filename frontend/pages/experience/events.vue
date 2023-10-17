<template>
    <div class="grid grid-cols-2 gap-5">
        <div v-for="e in events">
            {{ e.event_title }}
            {{ e.event_details }}
            {{ e.event_date }}
        </div>
    </div>
</template>

<script setup>

    const { data: events } = await useFetch('http://127.0.0.1:8000/events/')
</script>
