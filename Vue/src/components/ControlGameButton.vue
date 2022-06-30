<script setup>
//import {ref} from 'vue'
import TimeIcon from "@/components/icons/TimeIcon.vue";
const props = defineProps(["time", "title", "isActive"]);
</script>

<template>
  <div
    @click="$emit('buttonClick', props.title)"
    :class="{'bg-skin-dark-button-background-hover':isActive,'text-skin-primary':isActive}"
    class="text-lg flex p-2 my-2 justify-center cursor-pointer bg-skin-dark-button-background"
  >
    <div class="mr-2 first-letter:capitalize">{{ title }}</div>
    <div class="flex items-center">
      <div class="mr-0.5">{{ time }}</div>
      <div><TimeIcon class="w-4 h-4 fill-current" /></div>
    </div>
  </div>
</template>
