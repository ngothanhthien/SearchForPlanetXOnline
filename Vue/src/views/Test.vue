<script setup>
import { ref } from "vue";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io('http://localhost:6001')
socket.on('laravel_database_chat', (data) => { console.log(data) })
const input = ref(null);
const sendMessage = async () => {
  const response=await fetch("http://localhost:8000/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({'message':input.value}),
  });
  const data=await response.json();
  console.log(data);
};
const messages = ref([]);
</script>

<template>
  <input class="border-4" type="text" v-model="input" />
  {{ input }}
  <button @click="sendMessage">Send</button>
  <div>
    <div v-for="message in messages">
      {{ message }}
    </div>
  </div>
</template>
