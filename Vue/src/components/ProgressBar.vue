<script setup>
//import {ref} from 'vue'
const props=defineProps(['percent'])
</script>

<template>
    <div class="bg-skin-dark-background w-1/2">
        <div :style="{width: props.percent+'%'}" class="text-center bg-skin-primary text-white">{{percent}}%</div>
    </div>
</template>