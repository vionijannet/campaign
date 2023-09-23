<template>
    <div class="w-full space-y-1">
        <label :for="labelFor" class="font-semibold text-base" v-if="labelText">{{ labelText }}</label>
        <input type="text" :disabled="disabled" :name="labelFor" :value="value" class="bg-gray-100 focus:bg-white focus:border focus:border-gray-200 w-full p-4 rounded-lg text-lg text-gray-700 outline-0" :placeholder="placeholder" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["labelFor", "placeholder", "labelText", "value", "disabled"]);
</script>