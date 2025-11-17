<template>
  <section-template title="experience">
    <div>
      <experience-company
        v-for="{ company, positions } in experiences"
        :key="company.name"
        :company="company"
        :positions="positions"
      />
    </div>
  </section-template>
</template>

<script setup lang="ts">

import SectionTemplate from "@/views/SectionTemplate.vue"
import experiences from '@/assets/data/experience.json'
import ExperienceCompany from "@/components/ExperienceCompany.vue";
</script>

<style scoped>

</style>
