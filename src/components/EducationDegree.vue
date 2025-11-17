<template>
  <content-card :icon="organization.logo" :title="course">
    <h3 class="text-lg>">{{ degree }} - {{ organization.name }}</h3>
    <div class="text-sm text-gray-400" v-if="startDate || endDate">
      <date-range :start="startDate" :end="endDate" />
    </div>
  </content-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DateRange from "@/components/DateRange.vue";
import ContentCard from "@/components/ContentCard.vue";

const { course, degree, organization, startDate, endDate } = defineProps<{
  course: string
  degree: string
  organization: {
    name: string
    logo: string
  }
  startDate?: string
  endDate?: string
}>()
</script>

<style scoped>

</style>
