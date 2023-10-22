<template>
    <RouterView />
</template>

<script setup lang="ts">
import axios, { AxiosInstance } from 'axios';
import { TemplateService, TemplateServiceImpl } from './service/TemplateService';
import { provide } from 'vue';
import { GetTemplateUseCase, GetTemplateUseCaseImpl } from './usecase/template/GetTemplateUseCase';
import { GetDetailTemplateUseCase, GetDetailTemplateUseCaseImpl } from './usecase/template/GetDetailTemplateUseCase';
import { CreateTemplateUseCase, CreateTemplateUseCaseImpl } from './usecase/template/CreateTemplateUseCase';
import { UpdateTemplateUseCase, UpdateTemplateUseCaseImpl } from './usecase/template/UpdateTemplateUseCase';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://192.168.1.16:8080",
    timeout: 15000
});

const templateService: TemplateService = new TemplateServiceImpl(axiosInstance);
const getTemplate: GetTemplateUseCase = new GetTemplateUseCaseImpl(templateService);
provide("getTemplateUseCase", getTemplate);
const getDetailTemplate: GetDetailTemplateUseCase = new GetDetailTemplateUseCaseImpl(templateService);
provide("getDetailTemplateUseCase", getDetailTemplate);
const createTemplate: CreateTemplateUseCase = new CreateTemplateUseCaseImpl(templateService);
provide("createTemplateUseCase", createTemplate);
const updateTemplate: UpdateTemplateUseCase = new UpdateTemplateUseCaseImpl(templateService);
provide("updateTemplateUseCase", updateTemplate);
</script>