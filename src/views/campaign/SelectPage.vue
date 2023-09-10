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
            <img src="@/assets/popup-page.png" alt="Select Message Template" class="h-full">
        </div>

        <div class="flex justify-end space-x-2 pt-2">
            <ButtonBase type="error" class="w-40" @click="$emit('cancel')">Cancel</ButtonBase>
            <ButtonBase class="w-40" @click="$emit('continue', 'abc123')">Continue</ButtonBase>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import CheckboxGeneral from '@/components/in-app/CheckboxGeneral.vue';

</script>