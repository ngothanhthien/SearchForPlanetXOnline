<script setup>
//import {ref} from 'vue'
import { logoutApi } from "@/api";
import {
  getUserLoginToken,
  removeUserLoginToken,
} from "@/logic/userLoginToken";
import router from "@/router/index";
import Button from "@/components/Button.vue";
//const props=defineProps([])
const logout = async () => {
  const token = getUserLoginToken();
  const response = await fetch(logoutApi, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  console.log(response);
  removeUserLoginToken();
  router.push({ name: "UserLogin" });
};
</script>

<template>
  <div class="fixed right-2 top-1 cursor-pointer" @click="logout">
    Đăng xuất!
  </div>
  <div class="h-screen flex items-center"  style="background-image: url('/img/background-home.png')">
    <div class="mx-auto text-center p-4 px-10 border rounded-md">
      <div class="mb-2"><a class="text-white font-medium text-2xl" href="https://boardgamegeek.com/boardgame/279537/search-planet-x">Search for planet X</a></div>
      <div class="max-w-md mx-auto">
        <Button class="bg-skin-primary text-white my-0.5">Create recommend room</Button>
        <Button class="bg-skin-primary text-white my-0.5">Create custom room</Button>
        <Button class="bg-skin-primary text-white my-0.5">Join Room</Button>
        <Button class="bg-skin-primary text-white my-0.5">Solo</Button>
        <div class="font-medium mt-2">v2.3</div>
      </div>
    </div>
  </div>
</template>
