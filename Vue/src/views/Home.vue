<script setup>
//import {ref} from 'vue'
import {
  getUserLoginToken,
  removeUserLoginToken,
} from "@/logic/userLoginToken";
import router from "@/router/index";
import Button from "@/components/Button.vue";
import Logout from "@/components/Logout.vue";
</script>

<template>
  <Logout />
  <div
    class="h-screen flex items-center"
    style="background-image: url('/img/background-home.png')"
  >
    <div class="mx-auto w-1/3 text-center p-4 px-10 border rounded-md">
      <div class="mb-2">
        <a
          class="text-white font-medium text-2xl"
          href="https://boardgamegeek.com/boardgame/279537/search-planet-x"
          >Search for planet X</a
        >
      </div>
      <div class="mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
