<script setup>
import {ref} from 'vue'
import {updateApp} from '@/api'
import {mapList} from '@/map/mapList'
import delay from '@/logic/delay'
import Button from '@/components/Button.vue'
import ProgressBar from "@/components/ProgressBar.vue"
const count=ref();
const mapLength=mapList['18A'].length;
const isStart=ref(false);
const newLogics=ref(
    {
        confClueNoXWithinNY:'Default',
        confClueAllXWithinNY:'Default',
        confClueAllXWithinN:'Default',
        confClue1PlusXAdjacentY:'Default',
        confClueNoXOppositeY:'Default',
        confClue1PlusXOppositeY:'Default',
        confClue9NotWithinNY:'Default',
        confClue9NotOppositeY:'Default',
        confClue9NotWithin1Y:'Default',
        confClue9WithinNY:'Default',
    },
);
const update=async (e)=>{
    e.disabled= true;
    const map=mapList['18A'];
    isStart.value=true;
    for(let i=0;i<map.length;i++){
        console.log(map[i]);
        count.value=i+1;
        const response=await fetch(updateApp,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
               map: map[i]
            })
        })
        const {conf}=await response.json();
        Object.keys(conf).forEach(key=>{
            const logic=conf[key]['body']['type'];
            if(!newLogics.value.hasOwnProperty(logic)){
                newLogics.value[logic]=map[i];
            }
        })
        if((i % 5)==0){
            await delay(5000);
        }
    }
}
</script>

<template>
    <div class="w-1/2">
        <Button class="bg-skin-primary" @buttonClick="update">Update</Button>
    </div>
    <div v-if="isStart">
        <ProgressBar :percent="(parseFloat(count/mapLength).toFixed(2))*100" />
    </div>
    <div>
        <div v-for="(value,key) in newLogics">
            <span class="mr-2">{{key}}:</span>
            <span>{{value}}</span>
        </div>
    </div>
</template>