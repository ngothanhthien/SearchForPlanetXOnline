<script setup>
import { ref, reactive, unref, watch } from "vue";
import { useGame18Store } from "@/stores/game18";
import { useControlStore } from "@/stores/control";
import { toggleElement, countInteger } from "@/logic/array";
import {
  researchExc,
  surveyExc,
  targetExc,
  locateXExc,
  sectorClick,
  researchLetterClick,
  addControlFn,
  surveyTypeClick,
} from "@/logic/gameControl";
import Sector from "@/components/Sector.vue";
import ControlGameButton from "@/components/ControlGameButton.vue";
import CometIcon from "@/components/icons/CometIcon.vue";
import DwarfIcon from "@/components/icons/DwarfIcon.vue";
import EmptyIcon from "@/components/icons/EmptyIcon.vue";
import CloudIcon from "@/components/icons/CloudIcon.vue";
import XPlanetIcon from "@/components/icons/XPlanetIcon.vue";
import AsteroidIcon from "@/components/icons/AsteroidIcon.vue";
import TimeIcon from "@/components/icons/TimeIcon.vue";
const game18Store = useGame18Store();
const control = useControlStore();
const theories = [["purple", "red", "yellow", "green"]];
const yourColor = "red";
const playerName = "user1";
watch(
  () => control.fn,
  (fn) => {
    control.params.length = 0;
  }
);
watch(control.params, (arr) => {
  if (arr.length == 3 && control.fn == "survey") {
    surveyExc();
  }
  if (arr.length == 1 && control.fn == "research") {
    researchExc();
  }
  if (arr.length == 1 && control.fn == "target") {
    targetExc();
  }
  if ((arr.length == 1) & (control.fn == "locate X")) {
    locateXExc();
  }
});
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
        <Sector
          @sectorClick="sectorClick"
          :number="n"
          theoryTime="2"
          :theories="theories"
          :timeNow="game18Store.timeNow"
        />
      </div>
      <!-- row 2 -->
      <div class="col-span-1">
        <Sector
          @sectorClick="sectorClick"
          :number="18"
          theoryTime="2"
          :theories="theories"
          :timeNow="game18Store.timeNow"
        />
      </div>
      <div class="col-span-5 divide-y">
        <div class="mb-2 text-center text-xl">Research Log</div>
        <div class="flex flex-wrap">
          <div
            class="w-1/2"
            v-for="area in [
              ['A', 'B', 'C'],
              ['D', 'E', 'F'],
            ]"
          >
            <div v-for="letter in area">
              <div class="mr-1 flex">{{ letter }}:</div>
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
        <Sector
          @sectorClick="sectorClick"
          :number="8"
          theoryTime="2"
          :theories="theories"
          :timeNow="game18Store.timeNow"
        />
      </div>
      <!-- row 3 -->
      <div class="col-span-1">
        <Sector
          @sectorClick="sectorClick"
          :number="17"
          theoryTime="2"
          :theories="theories"
          :timeNow="game18Store.timeNow"
        />
      </div>
      <div class="col-span-5 divide-y">
        <div class="mb-2 text-center text-xl">Control</div>
        <div class="grid grid-cols-4 gap-4">
          <div class="select-none">
            <ControlGameButton
              :isActive="control.fn == 'survey'"
              @buttonClick="addControlFn"
              title="survey"
              :time="3"
            />
            <div class="grid grid-cols-5 gap-1 mb-0.5 max-w-fit">
              <div
                :class="{
                  'cs-active': control.fn == 'survey',
                  'text-skin-primary': control.params.includes(icon[1]),
                }"
                class="p-0.5"
                @click="surveyTypeClick(icon[1])"
                v-for="icon in [
                  [DwarfIcon, 'dwarf'],
                  [CometIcon, 'comet'],
                  [AsteroidIcon, 'asteroid'],
                  [CloudIcon, 'cloud'],
                  [EmptyIcon, 'empty'],
                ]"
              >
                <component class="w-full fill-current" :is="icon[0]" />
              </div>
            </div>
          </div>
          <div class="select-none">
            <ControlGameButton
              :isActive="control.fn == 'research'"
              @buttonClick="addControlFn"
              title="research"
              :time="'1-2'"
            />
            <div class="max-w-fit flex flex-wrap justify-center">
              <div
                :class="{
                  'cs-active': control.fn == 'research',
                  'cs-target': control.params.includes(letter),
                }"
                @click="researchLetterClick(letter)"
                class="py-1 px-3 m-0.5 rounded-full inline-block text-center"
                v-for="letter in ['A', 'B', 'C', 'D', 'E', 'F']"
              >
                {{ letter }}
              </div>
            </div>
          </div>
          <div class="select-none">
            <ControlGameButton
              :isActive="control.fn == 'target'"
              @buttonClick="addControlFn"
              title="target"
              :time="4"
            />
          </div>
          <div class="select-none">
            <ControlGameButton
              :isActive="control.fn == 'locate X'"
              @buttonClick="addControlFn"
              title="locate X"
              :time="5"
            />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <Sector
          @sectorClick="sectorClick"
          :number="9"
          time="2"
          :theories="theories"
          :timeNow="game18Store.timeNow"
        />
      </div>
      <!-- row 4 -->
      <div class="col-span-1" v-for="n in 7">
        <Sector
          @sectorClick="sectorClick"
          :number="17 - n"
          time="2"
          :theories="theories"
          :timeNow="game18Store.timeNow"
        />
      </div>
    </div>
    <!-- survey log -->
    <div class="bg-skin-dark-surface mr-2 my-2 grow divide-y">
      <div class="mb-2 text-center text-xl">Survey log</div>
      <div class="divide-x flex">
        <div
          class="w-1/5 py-1"
          :class="`text-skin-player-${game18Store.player.color}`"
          v-for="icon in [
            DwarfIcon,
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
        <div
          v-for="key in Object.keys(game18Store.player.surveys)"
          class="w-1/5"
        >
          <div
            v-for="log in game18Store.player.surveys[key]"
            class="text-center pt-1"
          >
            <span class="mr-1">{{ log.range }}:</span
            ><span>{{ log.result }}</span>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<style scoped>
.cs-active {
  @apply bg-skin-dark-button-background cursor-pointer;
}
.cs-target {
  @apply text-skin-primary;
}
</style>
