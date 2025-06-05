<script setup>
import { defineProps, defineEmits } from 'vue';
import SearchInput from 'vue-search-input'

const props = defineProps({
    search: String
})

const emit = defineEmits(['update:search'])
</script>

<template>
    <div class="bg-blue-600 fixed top-0 w-full py-8 text-withe font-bold text-lg content-start ">
        <h1>Catalog</h1>
        <div class="">
            <nav class="text-black px-4 py-2 flex justify-between items-center">
                <SearchInput :modelValue="props.search" @update:modelValue="val => emit('update:search', val)"/>
            </nav>
            <div class="font-bolt text-lg">
                <h1>Furniture</h1>
            </div>
            <div class="font-bolt text-lg">
                <h1>Fragance</h1>
            </div>
            <div class="font-bolt text-lg">
                <h1>beauty</h1>
            </div>
            <div class="font-bolt text-lg">
                <h1>Food</h1>
            </div>
        </div>
    </div>
</template>