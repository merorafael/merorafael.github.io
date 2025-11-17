<template>
  <header class="bg-gray-900 text-gray-300 print:text-gray-800 px-3 not-md:px-0 md:py-10">
    <div class="container mx-auto max-w-250">
      <div class="mx-auto py-5 md:py-0 print:py-0">
        <img v-if="photo" :src="photo" class="rounded-full w-40 md:w-60 print:w-30 print:ml-5 not-md:not-print:mx-auto" alt="Photo"/>
        <div class="flex flex-col md:flex-row print:flex-row print:justify-between md:justify-between">
          <div class="mt-5 not-md:px-5">
            <h1 class="font-bold text-3xl md:text-4xl">{{ name }}</h1>
            <h2 class="md:text-2xl">{{ position }}</h2>
            <h3 class="text-1xl">{{ location }}</h3>
          </div>
          <div class="mt-5 not-md:px-5">
            <ul>
              <li v-for="{ label, link, icon } in contacts" :key="label">
                <a :href="link" target="_blank" class="hover:text-white">
                  <i v-if="icon" :class="icon"></i>
                  {{ label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import photo from '@/assets/images/me.jpg'
import profile from '@/assets/data/profile.json'

const { name, position, location, contacts } = profile;
</script>

<style scoped>

</style>
