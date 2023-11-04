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
import { DeleteTemplateUseCase, DeleteTemplateUseCaseImpl } from './usecase/template/DeleteTemplateUseCase';
import { CampaignService, CampaignServiceImpl } from './service/CampaignService';
import { GetCampaignUseCase, GetCampaignUseCaseImpl } from './usecase/campaign/GetCampaignUseCase';
import { PageService, PageServiceImpl } from './service/PageService';
import { GetPageUseCase, GetPageUseCaseImpl } from './usecase/page/GetPageUseCase';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000
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
const deleteTemplate: DeleteTemplateUseCase = new DeleteTemplateUseCaseImpl(templateService);
provide("deleteTemplateUseCase", deleteTemplate);

const campaignService: CampaignService = new CampaignServiceImpl(axiosInstance);
const getCampaign: GetCampaignUseCase = new GetCampaignUseCaseImpl(campaignService);
provide("getCampaignUseCase", getCampaign);

const pageService: PageService = new PageServiceImpl(axiosInstance);
const getPage: GetPageUseCase = new GetPageUseCaseImpl(pageService);
provide("getPageUseCase", getPage);
</script>