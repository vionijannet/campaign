<template>
    <div class="p-4 space-y-4">
        <p class="text-2xl font-bold">Select Page</p>
        <div class="grid grid-cols-2 gap-x-4">
            <div class="space-y-4">
                <div class="space-y-2">
                    <CheckboxGeneral></CheckboxGeneral>
                    <CheckboxGeneral></CheckboxGeneral>
                    <CheckboxGeneral></CheckboxGeneral>
                    <CheckboxGeneral></CheckboxGeneral>
                </div>
            </div>
            <img src="@/assets/cuate.png" alt="Select Message Template" class="h-full">
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckboxGeneral from '@/components/in-app/CheckboxGeneral.vue';

</script>