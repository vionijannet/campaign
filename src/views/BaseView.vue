<template>
    <div class="fixed top-0 w-full h-[8vh] p-4 pr-0 flex items-center justify-between bg-blue-300">
        <div class="flex items-center">
            <button class="block md:hidden" @click="showSidebar = !showSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <img src="../assets/logo.png" alt="Logo" class="h-20">
        </div>
        <button v-if="!showSidebar" class="max-w-[276px] hover:bg-white hover:bg-opacity-25 p-2 px-4 hover:rounded-l-lg hover:cursor-pointer" @click="showOption=!showOption" @blur="onLeaveShowOption">
            <div class="flex items-center justify-between text-left">
                <div>
                    <h2 class="font-medium text-base max-w-[180px] truncate">John Doe</h2>
                    <h3 class="text-sm text-gray-500">Administrator</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </button>
    </div>
    <ul class="bg-white right-0 absolute z-50 shadow-2xl rounded-l-lg w-[276px] transition duration-200 ease-in-out" v-show="showOption">
        <div class="h-[8vh] bg-blue-darkest bg-opacity-85 rounded-tl-lg p-4 text-gray-50 flex items-center justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="">
                <h2 class="font-medium text-base max-w-[180px] truncate">John Doe</h2>
                <h3 class="text-sm text-gray-50">john.doe@gmail.com</h3>
            </div>
        </div>
        <div class="p-1 m-1">
            <li class="font-semibold text-sm text-gray-700 flex items-center p-2 hover:cursor-pointer hover:bg-slate-300 hover:rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span class="ml-4">View Profile</span>
            </li>
            <hr class="my-2" />
            <li class="font-semibold text-sm text-gray-700 flex items-center p-2 hover:cursor-pointer hover:bg-slate-300 hover:rounded-lg" @click="signOut">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span class="ml-4">Sign Out</span>
            </li>
        </div>
    </ul>
    <div class="relative flex min-h-[92vh] top-[8vh]">
        <div class="bg-white text-gray-700 w-full md:w-64 py-4 px-2 space-y-6 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out md:relative md:-translate-x-0" :class="{ 'relative -translate-x-0': showSidebar, '-translate-x-full': !showSidebar }">
            <nav>
                <router-link to="/" class="flex items-center py-3 px-4 hover:bg-sky-100 space-x-2 hover:rounded-xl group transition duration-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-gray-700 group-hover:text-cyan-700 text-lg font-semibold">Dashboard</span>
                </router-link>
            </nav>
            <section class="space-y-2">
                <p class="px-4 text-gray-400">Apps</p>
                <nav>
                    <router-link to="/campaign" class="flex items-center py-3 px-4 hover:bg-sky-100 space-x-2 hover:rounded-xl group transition duration-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                        </svg>
                        <span class="text-gray-700 group-hover:text-cyan-700 text-lg font-semibold">Campaign</span>
                    </router-link>
                </nav>
                <nav>
                    <router-link to="/message" class="flex items-center py-3 px-4 hover:bg-sky-100 space-x-2 hover:rounded-xl group transition duration-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                        <span class="text-gray-700 group-hover:text-cyan-700 text-lg font-semibold">Message</span>
                    </router-link>
                </nav>
                <nav>
                    <router-link to="/facebook" class="flex items-center py-3 px-4 hover:bg-sky-100 space-x-2 hover:rounded-xl group transition duration-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                        </svg>
                        <span class="text-gray-700 group-hover:text-cyan-700 text-lg font-semibold">Facebook</span>
                    </router-link>
                </nav>

            </section>
            <section class="space-y-2">
                <p class="px-4 text-gray-400">Settings</p>
                <nav>
                    <router-link to="/account" class="flex items-center py-3 px-4 hover:bg-sky-100 space-x-2 hover:rounded-xl group transition duration-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span class="text-gray-700 group-hover:text-cyan-700 text-lg font-semibold">Account</span>
                    </router-link>
                </nav>
            </section>
        </div>
        <div class="bg-blue-50 w-full md:w-[calc(100%-16rem)] py-6 px-8" :class="{ 'hidden md:block': showSidebar }">
            <p class="text-2xl font-bold pt-2 pb-4">{{ $route.name }}</p>
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { timer } from "rxjs";
import router from "@/router";

const showSidebar = ref(false);
const showOption = ref(false);

function onLeaveShowOption(): void {
    timer(300).subscribe(() => showOption.value = false);
}

function signOut(): void {
    router.push("/sign-in")
}
</script>