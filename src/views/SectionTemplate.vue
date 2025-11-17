<template>
  <div :id="title" class="py-3 first::not-print:pt-0 last:pb-0 print:border-y-1 print:last:border-b-0 print:border-gray-300">
    <h1 class="capitalize text-2xl print:text-xl mb-5">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { title } = defineProps<{
  title: string
}>()
</script>

<style scoped>

</style>
