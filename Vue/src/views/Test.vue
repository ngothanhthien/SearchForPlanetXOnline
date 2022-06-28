<script setup>
//import {ref} from 'vue'
import Sector from '@/components/Sector.vue'
//const props=defineProps([])
const theories=[
    ["purple","red","yellow","green"]
];
</script>

<template>
<div class="text-skin-dark-text-default">
    <Sector number="1" time="2" :theories="theories" />
</div>
</template>