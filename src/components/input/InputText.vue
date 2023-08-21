<template>
    <div class="w-full">
        <label :for="labelFor" class="font-semibold text-lg">{{ labelText }}</label><br v-if="labelText" />
        <input type="text" :name="labelFor" class="bg-gray-200 w-full p-4 rounded-lg text-lg text-gray-700 outline-0" :placeholder="placeholder" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["labelFor", "placeholder", "labelText"]);
</script>