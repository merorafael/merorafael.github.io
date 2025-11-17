<template>
  <div class="bg-gray-200 relative min-h-screen print:text-sm">
    <profile-header />
    <nav-bar :sections="['about', 'experience', 'certifications', 'education']"/>
    <main class="container mx-auto pt-5 text-gray-800 max-w-250 px-4 lg:px-0">
      <section-about />
      <section-experience />
      <section-certifications />
      <section-education />
    </main>
  </div>
</template>

<script setup lang="ts">
import ProfileHeader from "@/components/ProfileHeader.vue"
import NavBar from "@/components/NavBar.vue"
import SectionAbout from "@/views/SectionAbout.vue";
import SectionExperience from "@/views/SectionExperience.vue";
import SectionCertifications from "@/views/SectionCertifications.vue";
import SectionEducation from "@/views/SectionEducation.vue";

</script>

<style scoped>
</style>
