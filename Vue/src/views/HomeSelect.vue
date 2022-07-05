<script setup>
//import {ref} from 'vue'
import {createRoomApi} from '@/api'
import {sendRequestWithLoginToken} from '../logic/userLoginToken'
import router from '../router/index'
//const props=defineProps([])
import Button from "@/components/Button.vue";
const createRoom=async (e)=>{
  e.disabled=true;
  e.style.opacity=0.5;
  e.textContent='Creating...'
  const response=await sendRequestWithLoginToken(createRoomApi,[],"POST");
  router.push({name:'WaitRoom',params:{id:response['room_id']}});
}
</script>
<template>
  <Button class="bg-skin-primary text-white my-0.5" @buttonClick="createRoom"
    >Create recommend room</Button
  >
  <Button class="bg-skin-primary text-white my-0.5">Create custom room</Button>
  <Button class="bg-skin-primary text-white my-0.5">Join Room</Button>
  <Button class="bg-skin-primary text-white my-0.5">Solo</Button>
  <div class="font-medium mt-2 text-white">v2.3</div>
</template>
