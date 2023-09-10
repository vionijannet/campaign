<template>
    <select class="outline-none" @change="setData">
        <option v-for="op in optionList" :value="op" :selected="op.key === selected">{{ op.value }}</option>
    </select>
</template>

<script setup lang="ts">
const props = defineProps(["selected", "optionList"])
const emit = defineEmits(["change"])

function setData(event: Event): void {
    emit("change", (event.target as HTMLSelectElement).value);
}
</script>