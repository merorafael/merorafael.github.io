<template>
  <section-template title="certifications">
    <div>
      <certification-acquired
        v-for="{name, credential, issueDate, organization} in certifications"
        :key="name"
        :name="name"
        :credential="credential"
        :issueDate="issueDate"
        :organization="organization" />
    </div>
  </section-template>
</template>

<script setup lang="ts">

import SectionTemplate from "@/views/SectionTemplate.vue";
import CertificationAcquired from "@/components/CertificationAcquired.vue";
import certifications from "@/assets/data/certifications.json"
</script>

<style scoped>

</style>
