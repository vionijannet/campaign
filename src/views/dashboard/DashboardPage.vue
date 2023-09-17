<template>
    <div class="absolute top-0 right-0 my-6 mx-8 flex space-x-4">
        <div class="border rounded-lg border-blue-primary px-4 py-2 flex space-x-1 text-blue-primary font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-blue-primary">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <span>
                {{ shownDate }}
            </span>
        </div>
        <div class="border rounded-lg border-blue-primary px-4 py-2 flex space-x-1 text-blue-primary font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-blue-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
                {{ shownTime }}
            </span>
        </div>
    </div>
    <div class="grid grid-cols-5 gap-4">
        <div class="col-span-3 row-span-3 border rounded-lg bg-white p-4 flex">
            <div class="max-w-fit">
                <img src="../../assets/dashboard-cuate.png" alt="Dashboard" class="h-full">
            </div>
            <div class="flex-1 ml-2">
                <p class="text-2xl font-bold">2700</p>
                <p class="text-gray-600">Total Campaign</p>

                <ButtonBase class="font-semibold px-4 my-8 w-auto !text-base">View Campaign</ButtonBase>

                <hr class="mb-4" />

                <div class="grid grid-cols-2 my-2">
                    <div>
                        <p class="text-xl font-bold">2000</p>
                        <p class="text-green-500">Successfully Sent</p>
                    </div>
                    <div>
                        <p class="text-xl font-bold">150</p>
                        <p class="text-red-500">Failed to Send</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-2 row-span-5 border rounded-lg bg-white p-4 justify-between overflow-y-auto max-h-[78vh]">
            <p class="text-2xl font-bold">Log History</p>

            <ol class="ml-4 mt-4 border-l border-gray-200 space-y-4">
                <li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li><li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li><li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li><li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li><li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li><li class="flex -ml-3 space-x-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xs font-semibold">Campaign RepliEm</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Created Campaign</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="!w-6 !h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">New Account</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Adding New Account Haddyanazzi</p>
                    </div>
                </li>
                <li class="flex -ml-3 space-x-2 items-center">
                    <div class="w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col overflow-clip">
                        <p class="text-xs font-semibold">Delete Campaign</p>
                        <p class="text-xs font-light">09/04/2023 11:00:00 • Delete Campaign RepliEm</p>
                    </div>
                </li>
            </ol>
        </div>
        <div class="col-span-3 row-span-2 grid grid-cols-2 gap-4 border rounded-lg bg-white p-4 justify-between">
            <div class="border rounded p-4">
                <img src="../../assets/facebook-connect.png" alt="Facebook Connect" class="w-14 h-14">
                <div class="flex justify-between items-end space-y-12 w-full">
                    <div>
                        <p class="text-xl font-bold">100</p>
                        <p class="text-gray-600">Facebook Connect</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
            <div class="rounded border p-4">
                <img src="../../assets/page-connect.png" alt="Page Connect" class="w-14 h-14">
                <div class="flex justify-between items-end space-y-12 w-full">
                    <div>
                        <p class="text-xl font-bold">150</p>
                        <p class="text-gray-600">Page Connect</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
            <div class="col-span-2 rounded border p-4 flex items-center justify-between">
                <div class="flex items-center">
                    <img src="../../assets/total-template.png" alt="Total Template">
                    <div class="ml-4">
                        <p class="text-xl font-bold">50</p>
                        <p class="text-gray-600">Total Template</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
        <!-- <div class="col-span-2 border rounded-lg bg-white p-4 flex items-center justify-between">
        </div>
        <div class="col-span-3 !h-[40vh] rounded-lg bg-white">&nbsp;</div>
        <div class="col-span-2 !h-[40vh] rounded-lg bg-white">&nbsp;</div> -->
    </div>
</template>

<script setup lang="ts">
import { interval, timer } from "rxjs";
import { computed, ref } from "vue";
import { DateConverter } from "@/util/DateConverter";
import ButtonBase from "@/components/button/ButtonBase.vue";

const date = ref(new Date());

const shownDate = computed(() => DateConverter.convertDateObjectToDateString(date.value));
const shownTime = computed(() => DateConverter.convertDateObjectToTimeString(date.value));

interval(1000).subscribe(() => {
    date.value = new Date();
})
</script>