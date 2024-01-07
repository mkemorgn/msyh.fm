<template>
  <div class="flex justify-around flex-wrap pt-32">
    <!-- Team Member Component -->
    <div v-for="member in paginatedTeam" :key="member.id" class="w-64 mb-4">
      <!-- Team member photo -->
      <div class="bg-orange-500 p-1">
        <img :src="member.photo"/>
      </div>

      <!-- Team member details -->
      <div class="text-center mt-2">
        <div class="font-bold">{{ member.name }}</div>
        <div class="text-gray-700">{{ member.title }}</div>
      </div>

      <!-- social links -->
      <div class="space-x-5 text-center">
        <font-awesome-icon icon="fa-brands fa-instagram-square" />
        <font-awesome-icon icon="fa-brands fa-twitter-square" />
        <font-awesome-icon icon="fas fa-link" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const localTeam = ref([]);
const currentPage = ref(0);
const teamMembersPerPage = 4;
const teamApiUrl = 'http://127.0.0.1:8000/teams/';

// Fetching data once on component mount
onMounted(async () => {
    try {
        const response = await axios.get(teamApiUrl);
        localTeam.value = response.data;
    } catch (error) {
        console.error("Error fetching team members:", error);
    }
});

// Computed property for paginated events
const paginatedTeam = computed(() => {
    const start = currentPage.value * teamMembersPerPage;
    return localTeam.value.slice(start, start + teamMembersPerPage);
});

// Computed property for page count
const pageCount = computed(() => {
    return Math.ceil(localEvents.value.length / teamMembersPerPage);
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
