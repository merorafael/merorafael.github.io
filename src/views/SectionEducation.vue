<template>
  <section-template title="education">
    <div>
      <education-degree
        v-for="{course, degree, organization, startDate, endDate} in education"
        :key="course"
        :course="course"
        :degree="degree"
        :organization="organization"
        :startDate="startDate"
        :endDate="endDate" />
    </div>
  </section-template>
</template>

<script setup lang="ts">
import SectionTemplate from "@/views/SectionTemplate.vue"
import EducationDegree from "@/components/EducationDegree.vue"
import education from '@/assets/data/education.json'
</script>

<style scoped>

</style>
