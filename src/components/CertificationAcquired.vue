<template>
  <content-card :icon="organization.logo" :title="name">
    <h3 class="text-lg">{{ organization.name }}</h3>
    <div class="text-sm text-gray-400 pb-2">
      <date-range :end="issueDate" />
    </div>
    <div v-if="credential" class="pt-2 break-all print:border-t-1 print:border-t-1 print:border-t-gray-300 print:pt-3">
      <b>Credential: </b>
      <a v-if="credential" :href="credential" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-300">{{ credential }}</a>
    </div>
  </content-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DateRange from "@/components/DateRange.vue";
import ContentCard from "@/components/ContentCard.vue";

const { name, organization, issueDate, credential } = defineProps<{
  name: string
  organization: {
    name: string
    logo: string
  }
  issueDate: string
  credential?: string
}>()
</script>

<style scoped>

</style>
