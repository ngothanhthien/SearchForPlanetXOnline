<script setup>
import {ref} from 'vue'
import { useGame18Store } from '@/stores/game18'
import Sector from "@/components/Sector.vue";
import ControlGameButton from "@/components/ControlGameButton.vue";
import CometIcon from "@/components/icons/CometIcon.vue";
import DrawfIcon from "@/components/icons/DrawfIcon.vue";
import EmptyIcon from "@/components/icons/EmptyIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import XPlanetIcon from "@/components/icons/XPlanetIcon.vue";
import AsteroidIcon from "@/components/icons/AsteroidIcon.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
//const props=defineProps([])
const game18Store=useGame18Store();
const theories = [["purple", "red", "yellow", "green"]];
const yourColor="red"
const survey=()=>{
  game18Store.timeNow+=3;
}
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
        <Sector :number="n" theoryTime="2" :theories="theories" :timeNow="game18Store.timeNow" />
      </div>
      <!-- row 2 -->
      <div class="col-span-1">
        <Sector :number="18" theoryTime="2" :theories="theories" :timeNow="game18Store.timeNow" />
      </div>
      <div class="col-span-5 divide-y">
        <div class="mb-2 text-center text-xl">Research Log</div>
        <div class="flex flex-wrap">
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
          <div>
            <div>X1:</div>
            <div>X2:</div>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <Sector :number="8" theoryTime="2" :theories="theories" :timeNow="game18Store.timeNow" />
      </div>
      <!-- row 3 -->
      <div class="col-span-1">
        <Sector :number="17" theoryTime="2" :theories="theories" :timeNow="game18Store.timeNow" />
      </div>
      <div class="col-span-5 divide-y">
        <div class="mb-2 text-center text-xl">Control</div>
        <div class="grid grid-cols-4 gap-4">
          <div class="select-none">
            <ControlGameButton @click="survey" title="survey" :time="3" />
            <div class="grid grid-cols-5 gap-1 mb-0.5 max-w-fit">
              <div
                class="cursor-pointer hover:bg-skin-dark-button-background-hover p-0.5"
                v-for="icon in [
                  DrawfIcon,
                  CometIcon,
                  AsteroidIcon,
                  CloudIcon,
                  EmptyIcon,
                ]"
              >
                <component class="w-full fill-current" :is="icon" />
              </div>
            </div>
          </div>
          <div class="select-none">
            <ControlGameButton title="research" :time="'1-2'" />
            <div class="max-w-fit flex flex-wrap justify-center">
              <div
                class="py-1 px-3 m-0.5 rounded-full inline-block text-center cursor-pointer bg-skin-dark-button-background hover:bg-skin-dark-button-background-hover"
                v-for="letter in ['A', 'B', 'C', 'D', 'E', 'F']"
              >
                {{ letter }}
              </div>
            </div>
          </div>
          <div class="select-none"><ControlGameButton title="target" :time="4" /></div>
          <div class="select-none"><ControlGameButton title="locate X" :time="5" /></div>
        </div>
      </div>
      <div class="col-span-1">
        <Sector :number="9" time="2" :theories="theories" :timeNow="game18Store.timeNow" />
      </div>
      <!-- row 4 -->
      <div class="col-span-1" v-for="n in 7">
        <Sector :number="17 - n" time="2" :theories="theories" :timeNow="game18Store.timeNow" />
      </div>
    </div>
    <div class="bg-skin-dark-surface mr-2 my-2 grow divide-y">
      <div class="mb-2 text-center text-xl">Survey log</div>
      <div class="divide-x flex">
        <div
          class="w-1/5 py-1" :class="`text-skin-player-${yourColor}`"
          v-for="icon in [
            DrawfIcon,
            CometIcon,
            AsteroidIcon,
            CloudIcon,
            EmptyIcon,
          ]"
        >
          <component :is="icon" class="w-10 h-10 fill-current mx-auto" />
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
