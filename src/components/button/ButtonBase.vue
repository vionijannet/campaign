<template>
    <button class="w-full rounded-lg font-semibold text-base bg-blue-600 text-white p-3 hover:bg-blue-800 transition duration-300" @click="$emit('click')">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps(["click"]);
</script>