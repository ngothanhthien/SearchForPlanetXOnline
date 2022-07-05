<script setup>
import { onMounted, ref } from "vue";
import Button from "@/components/Button.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import router from "../router/index";
import {socket} from "../socket.io"
import { sendRequestWithLoginToken } from "../logic/userLoginToken";
import { showRoomApi, joinRoomApi } from "@/api";
const props = defineProps(["id"]);
const anotherRooms = ref({});
const userRoom = ref();
const isLoading=ref(true);
onMounted(async () => {
  const { message, user } = await sendRequestWithLoginToken(
    joinRoomApi,
    { room_uid: props.id },
    "POST"
  );
  if (message == "Room not found") {
    router.push({ name: "PageNotFound" });
  }
  if (message == "joined" || message == "room full") {
    const { rooms } = await sendRequestWithLoginToken(showRoomApi, [], "POST");
    Object.keys(rooms).forEach((uid) => {
      if (message == "joined" && uid == props.id) {
        userRoom.value = rooms[uid];
      } else {
        anotherRooms.value[uid]=rooms[uid];
      }
    });
  }
  isLoading.value = false;
});
socket.on('laravel_database_presence-waitingRoom',(data)=>{
  if(data['action']=="createRoom"){
    const room=data['room'];
    const uid=room['name']
    console.log(room)
    if(!anotherRooms.value.hasOwnProperty(uid)&&uid!=props.id){
      anotherRooms.value[uid]={
        capacity: room['capacity'],
        key: room['master_room'],
        totalUser: 1,
        user: [room['master_room']],
      }
    }
  }
  if(data['action']=='deleteRoom'){
    const uid=data['room_uid'];
    delete anotherRooms.value[uid];
  }
});
const backToHome = (e) => {
  e.disabled = true;
  e.textContent = "Processing...";
  router.push({ name: "SelectOption" });
};
</script>

<template>
  <div
    class="bg-skin-dark-background text-skin-dark-text-default rounded-md p-2"
  >
    <div v-if="isLoading">
      <LoadingScreen class="w-10 mx-auto" />
    </div>
    <div v-else>
      <div v-if="userRoom" class="bg-skin-dark-surface px-2 py-1 mb-2">
        <div class="flex justify-between">
          <div>Your room #{{ id }}</div>
          <div>1/4</div>
        </div>
        <div class="flex justify-between">
          <div class="flex text-left items-center">
            <div
              v-for="user in userRoom.user"
              :class="{ 'text-skin-primary': user == userRoom.key }"
            >
              {{ user }}
            </div>
          </div>
          <div>
            <Button class="bg-skin-primary text-white">Start</Button>
          </div>
        </div>
      </div>
      <div v-for="(room, uid) in anotherRooms" class="px-2 py-1 cursor-pointer">
        <div class="flex justify-between">
          <div>Room #{{ uid }}</div>
          <div>{{ room.totalUser }}/{{ room.capacity }}</div>
        </div>
        <div class="flex text-left items-center">
          <div
            v-for="user in room.user"
            :class="{ 'text-skin-primary': user == room.key }"
            class="w-1/4 truncate"
          >
            {{ user }}
          </div>
        </div>
      </div>
      <div>
        <Button
          class="bg-skin-dark-button-background text-white my-0.5"
          @buttonClick="backToHome"
        >
          Back to home
        </Button>
      </div>
    </div>
  </div>
</template>
