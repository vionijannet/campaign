<template>
    <div class="absolute top-0 right-0 my-6 mx-8 flex space-x-4">
        <ButtonBase class="flex" @click="openPopupCreate">
            <img src="../../assets/icon-create.svg" alt="Create">
            <span class="ml-2">Create</span>
        </ButtonBase>
    </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import router from "@/router";

function openPopupCreate(): void {
    console.log("harusnya buka pop up");
    router.push("/campaign/create");
}
</script>