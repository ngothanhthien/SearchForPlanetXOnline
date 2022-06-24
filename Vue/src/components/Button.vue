<script setup>
//import {ref} from 'vue'
// const props=defineProps([])
</script>

<template>
    <button
        @click="$emit('buttonClick')"
        class="select-none first-letter:capitalize py-2 px-4 hover:opacity-high w-full transition text-center text-base font-semibold rounded-lg"
    >
        <slot></slot>
    </button>
</template>