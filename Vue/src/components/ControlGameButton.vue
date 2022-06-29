<script setup>
//import {ref} from 'vue'
import TimeIcon from "@/components/icons/TimeIcon.vue";
const props = defineProps(["time", "title"]);
</script>

<template>
  <div
    class="text-lg flex p-2 my-2 justify-center cursor-pointer bg-skin-dark-button-background hover:bg-skin-dark-button-background-hover"
  >
    <div class="mr-2 first-letter:capitalize">{{ title }}</div>
    <div class="flex items-center">
      <div class="mr-0.5">{{ time }}</div>
      <div><TimeIcon class="w-4 h-4 fill-current" /></div>
    </div>
  </div>
</template>
