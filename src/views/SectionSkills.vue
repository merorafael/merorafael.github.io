<template>
  <section-template title="Main Skills">
    <div class="whitespace-pre-line">
      <ul class="flex flex-col items-center justify-start flex-wrap list-disc list-inside h-25 print:h-25">
        <li
          class="w-80"
          v-for="skill in skills"
          :key="skill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </section-template>
</template>

<script setup lang="ts">

import skills from '@/assets/data/skills.json'
import SectionTemplate from "@/views/SectionTemplate.vue";
</script>

<style scoped>

</style>
