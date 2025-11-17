<template>
  <content-card :icon="company.logo" :title="company.name">
    <div>
      <experience-position
        v-for="{ title, description, startDate, endDate} in positions"
        :key="title"
        :title="title"
        :description="description"
        :start-date="startDate"
        :end-date="endDate" />
    </div>
  </content-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import ExperiencePosition from "@/components/ExperiencePosition.vue";
import ContentCard from "@/components/ContentCard.vue";

const { company, positions } = defineProps<{
  company: {
    name: string
    logo: string
  },
  positions: {
    title: string
    description: string
    startDate: string
    endDate?: string | undefined
  }[]
}>()
</script>

<style scoped>

</style>
