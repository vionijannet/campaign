<template>
    <div>
        <div class="fixed inset-0 z-50 flex justify-center items-center">
            <div class="relative flex flex-col w-1/2 rounded-lg shadow-lg bg-white p-4">
                <div class="absolute -right-3 -top-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-8 h-8 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <slot />
            </div>
        </div>
        <div class="opacity-25 bg-black h-screen fixed inset-0 z-40"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    document.body.classList.add("overflow-hidden");
})

onUnmounted(() => {
    document.body.classList.remove("overflow-hidden");
})
</script>