<template>
  <div class="not-first:border-t-1 not-first:pt-5 not-first:mt-5 print:border-t-gray-200 print:border-dotted">
    <h3 class="text-lg">{{ title }}</h3>
    <div class="text-sm text-gray-400 pb-2">
      <date-range :start="startDate" :end="endDate" />
    </div>
    <div class="whitespace-pre-line print:border-t-1 print:border-t-gray-300 print:pt-3">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import DateRange from "@/components/DateRange.vue";

const { title, description, startDate, endDate } = defineProps<{
  title: string
  description: string
  startDate: string
  endDate?: string
}>()
</script>

<style scoped>

</style>
