<template>
  <div class="flex bg-gray-800 not-print:p-5 print:py-2 rounded-lg text-gray-300 print:text-gray-600 my-3 first:mt-0 last:mb-0">
    <div v-if="icon" class="w-15 lg:w-20 flex-none">
      <img :src="icon" :alt="icon" class="rounded-md" />
    </div>
    <div :class="['w-full', icon ? 'ml-5' : null]">
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { icon } = defineProps<{
  icon?: string
  title: string
}>()
</script>

<style scoped>

</style>
