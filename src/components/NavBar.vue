<template>
  <nav class="sticky top-0 p-4 w-full bg-gray-800 overflow-x-hidden print:hidden">
    <div class="flex flex-wrap justify-center font-mono">
      <a v-for="section in sections"
         :key="section"
         :href="`#${section}`"
         :class="['px-3', 'py-2', 'rounded-md', 'transition-colors',
           activeSession === section ? ['text-white', 'font-bold'] : ['text-gray-300',  'hover:bg-gray-600', 'hover:text-white']]"
         @click="updateSession(section)"
      >{{ section.replace('-', ' ') }}</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeMount, defineProps, ref } from 'vue'

const { sections } = defineProps<{
  sections: string[]
}>()

const activeSession = ref('')
const updateSession = (anchor: string) => {
  activeSession.value = anchor
}

onBeforeMount(() => {
  updateSession(window.location.hash?.replace('#', ''))
})
</script>

<style scoped>

</style>
