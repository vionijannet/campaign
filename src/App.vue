<template>
    <RouterView />
</template>

<script setup lang="ts">
import axios, { AxiosInstance } from 'axios';
import { TemplateService, TemplateServiceImpl } from './service/TemplateService';
import { GetTemplateUseCase, GetTemplateUseCaseImpl } from './usecase/template/GetTemplateUseCase';
import { provide } from 'vue';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://192.168.1.16:8080",
    timeout: 15000
});
const templateService: TemplateService = new TemplateServiceImpl(axiosInstance);
const getTemplate: GetTemplateUseCase = new GetTemplateUseCaseImpl(templateService);
provide("getTemplateUseCase", getTemplate)
</script>