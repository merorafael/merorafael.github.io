<template>
  <div :id="sectionId" class="scroll-mt-16 py-3 first::not-print:pt-0 last:pb-0 print:border-y-1 print:last:border-b-0 print:border-gray-300">
    <h1 class="capitalize text-2xl print:text-xl mb-5">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const { title } = defineProps<{
  title: string
}>()

const sectionId = computed(() => {
  return title.replace(/ /g, '-').toLowerCase();
})
</script>

<style scoped>

</style>
