<script setup>
//import {ref} from 'vue'
import Sector from "@/components/Sector.vue";
import CometIcon from "@/components/icons/CometIcon.vue";
import DrawfIcon from "@/components/icons/DrawfIcon.vue";
import EmptyIcon from "@/components/icons/EmptyIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import XPlanetIcon from "@/components/icons/XPlanetIcon.vue";
import AsteroidIcon from "@/components/icons/AsteroidIcon.vue";
//const props=defineProps([])
const theories = [["purple", "red", "yellow", "green"]];
</script>

<template>
  <div
    class="bg-skin-dark-background h-screen text-skin-dark-text-default flex"
  >
    <div
      class="p-2 m-2 rounded bg-skin-dark-surface grid grid-cols-7 gap-4 w-fit h-fit"
    >
      <!-- row 1 -->
      <div class="col-span-1" v-for="n in 7">
        <Sector :number="n" time="2" :theories="theories" />
      </div>
      <!-- row 2 -->
      <div class="col-span-1">
        <Sector number="18" time="2" :theories="theories" />
      </div>
      <div class="col-span-5 divide-y">
        <div class="mb-2 text-center text-xl">Research Log</div>
        <div class="flex">
          <div class="w-1/2">
            <div>
              <div class="mr-1 flex">A:</div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div class="mr-1 flex">B:</div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div class="mr-1 flex">C:</div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="w-1/2">
            <div>
              <div class="mr-1 flex">D:</div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div class="mr-1 flex">E:</div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div class="mr-1 flex">F:</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <Sector number="8" time="2" :theories="theories" />
      </div>
      <!-- row 3 -->
      <div class="col-span-1">
        <Sector number="17" time="2" :theories="theories" />
      </div>
      <div class="col-span-5 divide-y">
        <div class="mb-2 text-center text-xl">Control</div>
        <div>
            <div>Survey</div>
        </div>
        <div class="mb-2 text-center text-lg">
            <span class="mr-1">Result:</span>
            <span></span>
        </div>
      </div>
      <div class="col-span-1">
        <Sector number="9" time="2" :theories="theories" />
      </div>
      <!-- row 4 -->
      <div class="col-span-1" v-for="n in 7">
        <Sector :number="17 - n" time="2" :theories="theories" />
      </div>
    </div>
    <div class="bg-skin-dark-surface mr-2 my-2 grow divide-y">
      <div class="mb-2 text-center text-xl">Survey log</div>
      <div class="divide-x flex">
        <div class="w-1/5 py-1">
          <DrawfIcon class="w-10 h-10 fill-current mx-auto" />
        </div>
        <div class="w-1/5 py-1">
          <CometIcon class="w-10 h-10 fill-current mx-auto" />
        </div>
        <div class="w-1/5 py-1">
          <AsteroidIcon class="w-10 h-10 fill-current mx-auto" />
        </div>
        <div class="w-1/5 py-1">
          <CloudIcon class="w-10 h-10 fill-current mx-auto" />
        </div>
        <div class="w-1/5 py-1">
          <EmptyIcon class="w-10 h-10 fill-current mx-auto" />
        </div>
      </div>
      <div class="divide-x flex">
        <div class="w-1/5">
          <div class="text-center pt-1">1-5</div>
          <div class="text-center pt-1">1-5</div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
