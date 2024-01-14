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
        <!-- Social Media Links Display -->
        <div class="mt-2 text-center">
          <a v-for="link in member.social_media_links" :key="link" :href="link" target="_blank">
            <font-awesome-icon :icon="getIconName(link)" class="mx-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from '@vue/composition-api';
import axios from 'axios';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface TeamMember {
  name: string;
  title: string;
  photo: string;
  social_media_links: string[];
}

export default {
  setup() {
    const teamApiUrl = 'http://localhost:8000/teams/'; 
    const localTeam = ref<TeamMember[]>([]);
    const currentPage = ref(0);
    const teamMembersPerPage = 10; // Adjust as needed

    // Fetch Team Data
    onMounted(async () => {
      try {
        const response = await axios.get(teamApiUrl);
        localTeam.value = response.data;
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    });

    // Computed property for paginated team
    const paginatedTeam = computed(() => {
      const start = currentPage.value * teamMembersPerPage;
      return localTeam.value.slice(start, start + teamMembersPerPage);
    });

    // Computed property for page count
    const pageCount = computed(() => {
      return Math.ceil(localTeam.value.length / teamMembersPerPage);
    });

    // Pagination methods
    const nextPage = () => {
      if (currentPage.value < pageCount.value - 1) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 0) {
        currentPage.value--;
      }
    };

    // Method to get Font Awesome icon name based on link
    const getIconName = (link: string): IconDefinition => {
      if (link.includes('instagram')) {
        return ['fab', 'instagram'];
      }
      if (link.includes('facebook')) {
        return ['fab', 'facebook-f'];
      }
      if (link.includes('github')) {
        return ['fab', 'github'];
      }
      return ['fab', 'link']; // Default icon
    };

    return {
      paginatedTeam,
      currentPage,
      pageCount,
      nextPage,
      prevPage,
      getIconName,
    };
  },
};
</script>
