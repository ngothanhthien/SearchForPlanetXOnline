<script setup>
import { removeUserLoginToken,sendRequestWithLoginToken } from "@/logic/userLoginToken";
import {logoutApi} from '@/api'
import router from "@/router/index";
const logout = async () => {
  sendRequestWithLoginToken(logoutApi, [],"POST");
  removeUserLoginToken();
  router.push({ name: "UserLogin" });
};
</script>

<template>
  <div class="fixed right-2 top-1 cursor-pointer text-white" @click="logout">
    Đăng xuất!
  </div>
</template>
