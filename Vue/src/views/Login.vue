<script setup>
import { reactive, unref, ref } from "vue";
import LockIcon from "../components/icons/LockIcon.vue";
import PersonIcon from "../components/icons/PersonIcon.vue";
import Button from "../components/Button.vue";
import { setUserLoginToken } from "@/logic/userLoginToken";
import { loginApi, csrf } from "@/api";
import router from "@/router/index";
//const props=defineProps([])
const form = reactive({
  account: "",
  password: "",
});
const errors = reactive({
  account: "",
  password: "",
  message: "",
});
const submitForm = async () => {
  const loginButton = document.getElementById("login-button");
  loginButton.textContent = "đang đăng nhập...";
  loginButton.disabled = true;
  errors.account = "";
  errors.password = "";
  errors.message = "";
  // try {
  const response = await fetch(loginApi, {
    method: "POST",
    body: JSON.stringify(unref(form)),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  if (data.errors) {
    Object.keys(data.errors).forEach(function (key, index) {
      errors[key] = data.errors[key][0];
    });
  } else if (data.message) {
    errors.message = data.message;
  } else {
    setUserLoginToken(data.token);
    router.push({ name: "Home" });
  }
  loginButton.textContent = "đăng nhập";
  loginButton.disabled = false;
  form.password = "";
};
</script>

<template>
  <div
    class="relative w-full h-screen bg-cover bg-no-repeat"
    style="background-image: url('/img/background-user-login.webp')"
  >
    <div
      class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"
    >
      <div class="self-center mb-1 text-xl font-light sm:text-2xl">
        Đăng nhập
      </div>
      <div
        class="text-skin-error self-center mb-4 first-letter:capitalize mt-1"
      >
        {{ errors.message }}
      </div>
      <div>
        <form @submit.prevent action="#" autoComplete="off">
          <div class="flex flex-col mb-2">
            <div class="flex relative">
              <span
                class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 shadow-sm text-sm"
              >
                <PersonIcon class="w-5 h-5 fill-current" />
              </span>
              <input
                type="text"
                class="rounded-r-lg flex-1 appearance-none border text-skin-base border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-skin-primary focus:border-transparent"
                placeholder="Tài khoản"
                v-model="form.account"
              />
            </div>
            <div class="text-skin-error first-letter:capitalize mt-1">
              {{ errors.account }}
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <div class="flex relative">
              <span
                class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 shadow-sm text-sm"
              >
                <LockIcon class="w-5 h-5 fill-current" />
              </span>
              <input
                type="password"
                class="rounded-r-lg flex-1 text-skin-base appearance-none border border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-skin-primary focus:border-transparent"
                placeholder="Mật khẩu"
                autoComplete="on"
                v-model="form.password"
              />
            </div>
            <div class="text-skin-error first-letter:capitalize mt-1">
              {{ errors.password }}
            </div>
          </div>
          <div class="flex w-full">
            <Button
              class="bg-skin-primary text-white"
              @buttonClick="submitForm"
              id="login-button"
            >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
