<template>
  <span v-if="startMoment">{{ startMoment.format('MMMM YYYY') }} - </span>
  <span v-if="endMoment">{{ endMoment.format('MMMM YYYY') }}</span>
  <span v-else><b>currently</b></span>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import moment from 'moment'

const { start, end } = defineProps<{
  start?: string
  end?: string
}>()

const startMoment = computed(() => {
  return (start)
    ? moment(start, 'MM/YYYY')
    : null;
})

const endMoment = computed(() => {
  return (end)
    ? moment(end, 'MM/YYYY')
    : null;
})

</script>

<style scoped>

</style>
