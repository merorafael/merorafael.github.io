<template>
  <section-template title="about">
    <div class="whitespace-pre-line">
      {{ profile.about }}
    </div>
  </section-template>
</template>

<script setup lang="ts">
import SectionTemplate from "@/views/SectionTemplate.vue"
import profile from '@/assets/data/profile.json'
</script>

<style scoped>

</style>
