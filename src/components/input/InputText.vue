<template>
    <div class="w-full space-y-1">
        <label :for="labelFor" class="font-semibold text-base" v-if="labelText">{{ labelText }}</label>
        <input type="text" :disabled="disabled" :name="labelFor" :value="text" :placeholder="placeholder"
            class="disabled:bg-gray-100 bg-white border border-gray-100 w-full p-4 rounded-lg text-lg text-gray-700 outline-0" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(["labelFor", "placeholder", "labelText", "value", "disabled"]);
const emit = defineEmits(["type"]);

const text = computed({
    get() {
        return props.value;
    },
    set(newValue) {
        emit("type", newValue);
    }
});
</script>