<script setup>
import { computed } from "vue";
const props = defineProps(["number", "theories", "theoryTime", "timeNow"]);
import { useControlStore } from "@/stores/control";
import CometIcon from "@/components/icons/CometIcon.vue";
import DwarfIcon from "@/components/icons/DwarfIcon.vue";
import EmptyIcon from "@/components/icons/EmptyIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import XPlanetIcon from "@/components/icons/XPlanetIcon.vue";
import AsteroidIcon from "@/components/icons/AsteroidIcon.vue";
import PersonIcon from "@/components/icons/PersonIcon.vue";
import TheoryIcon from "@/components/icons/TheoryIcon.vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
const control = useControlStore();
const cometList = [2, 3, 5, 7, 11, 13, 17];
const activeSector = computed(() => {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(((props.timeNow - 1 + i) % 18) + 1);
  }
  return arr;
});
</script>

<template>
  <div
    @click="$emit('sectorClick', props.number, activeSector.includes(number))"
    :class="{
      'cs-sector-wrapper':(control.fn == 'survey'||control.fn == 'target'),
      'active':activeSector.includes(number),
      'bg-skin-dark-button-background-hover cursor-pointer':control.fn=='locate X',
    }"
    class="w-full rounded-md bg-skin-dark-button-background"
  >
    <div class="flex justify-center p-1.5">
      <div>
        <div class="flex">
          <div class="cursor-pointer">
            <XPlanetIcon class="w-10 h-10 fill-current" />
          </div>
          <div class="cursor-pointer">
            <EmptyIcon class="w-10 h-10 fill-current" />
          </div>
        </div>
        <div class="flex">
          <div class="cursor-pointer">
            <CloudIcon class="w-10 h-10 fill-current" />
          </div>
          <div class="cursor-pointer">
            <DwarfIcon class="w-10 h-10 fill-current" />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="cursor-pointer">
            <AsteroidIcon class="w-10 h-10 fill-current" />
          </div>
          <div class="cursor-pointer" v-if="cometList.includes(number)">
            <CometIcon class="w-10 h-10 fill-current" />
          </div>
        </div>
      </div>
      <div class="ml-2 grid-rows-3 grid">
        <div class="row-span-1 relative" :class="`row-start-${theoryTime}`">
          <div class="peer"><TheoryIcon class="w-10 h-10 fill-current" /></div>
          <div
            class="peer-hover:block hidden absolute -translate-y-1/2 top-1/2 right-full z-40 bg-skin-dark-button-background-hover"
          >
            <div class="items-center flex" v-for="(theory, index) in theories">
              <div class="pr-1">{{ index + 1 }}:</div>
              <div :class="`text-skin-player-${color}`" v-for="color in theory">
                <PersonIcon class="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-1 row-start-3 flex items-center justify-center">
          <EyeIcon class="h-5 w-5 fill-current" />
        </div>
      </div>
    </div>
    <div :class="{'in-params':control.params.includes(number)}" class="cs-sector-number text-center text-3xl border-t">
        {{ number }}
    </div>
  </div>
</template>
<style scoped>
.active .cs-sector-number {
  @apply text-skin-primary;
}
.active .cs-sector-number.in-params{
  @apply text-skin-base bg-skin-primary border-none
}
.active.cs-sector-wrapper {
  @apply bg-skin-dark-button-background-hover cursor-pointer;
}
</style>
