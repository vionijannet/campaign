<template>
    <div class="flex items-center justify-between">
        <!-- checkbox and profile -->
        <div class="flex items-center">
            <label for="audiens-1" class="flex items-center space-x-3">
                <input type="checkbox" name="audiens-1" id="audiens-1" @change="selectAudiens" />
                <div class="flex items-center space-x-2">
                    <img src="https://http.dog/200.jpg" alt="Audience" class="w-[50px] h-[50px] rounded-2xl">
                    <div>
                        <p class="font-semibold">John Doe</p>
                        <p class="text-sm text-gray-800">Message</p>
                    </div>
                </div>
            </label>
        </div>
        <div class="flex flex-col text-right space-y-2">
            <p class="text-sm text-gray-500">October 28, 2022</p>
            <div>
                <span class="bg-blue-600 py-1 px-2 rounded-lg flex-1 text-sm text-white font-semibold">2</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["id", "imageUrl", "name", "message", "lastUpdate", "unreadMessage"]);
const emit = defineEmits(["select"]);

function selectAudiens(event: Event): void {
    const check = (event.target as HTMLInputElement).checked;
    emit("select", props.id, check);
}
</script>