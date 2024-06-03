<template>
    <RouterView />
</template>

<script setup lang="ts">
import axios, { AxiosInstance } from 'axios';
import { TemplateService, TemplateServiceImpl } from './service/TemplateService';
import { onMounted, provide } from 'vue';
import { GetTemplateUseCase, GetTemplateUseCaseImpl } from './usecase/template/GetTemplateUseCase';
import { GetDetailTemplateUseCase, GetDetailTemplateUseCaseImpl } from './usecase/template/GetDetailTemplateUseCase';
import { CreateTemplateUseCase, CreateTemplateUseCaseImpl } from './usecase/template/CreateTemplateUseCase';
import { UpdateTemplateUseCase, UpdateTemplateUseCaseImpl } from './usecase/template/UpdateTemplateUseCase';
import { DeleteTemplateUseCase, DeleteTemplateUseCaseImpl } from './usecase/template/DeleteTemplateUseCase';
import { CampaignService, CampaignServiceImpl } from './service/CampaignService';
import { GetCampaignUseCase, GetCampaignUseCaseImpl } from './usecase/campaign/GetCampaignUseCase';
import { PageService, PageServiceImpl } from './service/PageService';
import { GetPageUseCase, GetPageUseCaseImpl } from './usecase/page/GetPageUseCase';
import { DeleteCampaignUseCase, DeleteCampaignUseCaseImpl } from './usecase/campaign/DeleteCampaignUseCase';
import { CreateCampaignUseCase, CreateCampaignUseCaseImpl } from './usecase/campaign/CreateCampaignUseCase';
import { GetDetailCampaignUseCase, GetDetailCampaignUseCaseImpl } from "@/usecase/campaign/GetDetailCampaignUseCase";
import { UpdateCampaignUseCase, UpdateCampaignUseCaseImpl } from './usecase/campaign/UpdateCampaignUseCase';
import { SendCampaignUseCase, SendCampaignUseCaseImpl } from './usecase/campaign/SendCampaignUseCase';
import { FacebookService, FacebookServiceImpl } from './service/FacebookService';
import { GetFacebookLinkedUseCase, GetFacebookLinkedUseCaseImpl } from './usecase/facebook/GetFacebookLinkedUseCase';
import { UserService, UserServiceImpl } from './service/UserService';
import { GetLoginHistoryUseCase, GetLoginHistoryUseCaseImpl } from './usecase/user/GetLoginHistoryUseCase';
import { GetDashboardUseCase, GetDashboardUseCaseImpl } from './usecase/user/GetDashboardUseCase';
import { LoginUseCase, LoginUseCaseImpl } from './usecase/user/LoginUseCase';
import { RegisterUseCase, RegisterUseCaseImpl } from './usecase/user/RegisterUseCase';
import { AudienceService, AudienceServiceImpl } from './service/AudienceService';
import { GetAudienceUseCase, GetAudienceUseCaseImpl } from './usecase/audience/GetAudienceUseCase';
import { GetGroupUseCase, GetGroupUseCaseImpl } from './usecase/audience/GetGroupUseCase';
import { GetDetailGroupUseCase, GetDetailGroupUseCaseImpl } from './usecase/audience/GetDetailGroupUseCase';
import { GetPageDetailUseCase, GetPageDetailUseCaseImpl } from './usecase/page/GetPageDetailUseCase';
import { AddGroupUseCase, AddGroupUseCaseImpl } from './usecase/audience/AddGroupUseCase';
import { UpdateGroupUseCase, UpdateGroupUseCaseImpl } from './usecase/audience/UpdateGroupUseCase';
import { DeleteGroupUseCase, DeleteGroupUseCaseImpl } from './usecase/audience/DeleteGroupUseCase';
import { UploadAttachmentUseCase, UploadAttachmentUseCaseImpl } from './usecase/template/UploadAttachmentUseCase';
import { GetAccountUseCase, GetAccountUseCaseImpl } from './usecase/facebook/GetAccountUseCase';

const axiosInstance: AxiosInstance = axios.create({    
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 60000
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
const uploadAttachment: UploadAttachmentUseCase = new UploadAttachmentUseCaseImpl(templateService);
provide("uploadAttachmentUseCase", uploadAttachment);

const campaignService: CampaignService = new CampaignServiceImpl(axiosInstance);
const getCampaign: GetCampaignUseCase = new GetCampaignUseCaseImpl(campaignService);
provide("getCampaignUseCase", getCampaign);
const deleteCampaign: DeleteCampaignUseCase = new DeleteCampaignUseCaseImpl(campaignService);
provide("deleteCampaignUseCase", deleteCampaign);
const createCampaign: CreateCampaignUseCase = new CreateCampaignUseCaseImpl(campaignService);
provide("createCampaignUseCase", createCampaign);
const getDetailCampaign: GetDetailCampaignUseCase = new GetDetailCampaignUseCaseImpl(campaignService);
provide("getDetailCampaignUseCase", getDetailCampaign);
const updateCampaign: UpdateCampaignUseCase = new UpdateCampaignUseCaseImpl(campaignService);
provide("updateCampaignUseCase", updateCampaign);
const sendCampaign: SendCampaignUseCase = new SendCampaignUseCaseImpl(campaignService);
provide("sendCampaignUseCase", sendCampaign);

const pageService: PageService = new PageServiceImpl(axiosInstance);
const getPage: GetPageUseCase = new GetPageUseCaseImpl(pageService);
provide("getPageUseCase", getPage);
const getPageDetail: GetPageDetailUseCase = new GetPageDetailUseCaseImpl(pageService);
provide("getPageDetailUseCase", getPageDetail);

const facebookService: FacebookService = new FacebookServiceImpl(axiosInstance);
const getFacebookLinked: GetFacebookLinkedUseCase = new GetFacebookLinkedUseCaseImpl(facebookService);
provide("getFacebookLinkedUseCase", getFacebookLinked);
const getAccount: GetAccountUseCase = new GetAccountUseCaseImpl(facebookService);
provide("getAccountUseCase", getAccount);

const audienceService: AudienceService = new AudienceServiceImpl(axiosInstance);
const getAudience: GetAudienceUseCase = new GetAudienceUseCaseImpl(audienceService);
provide("getAudienceUseCase", getAudience);
const getGroup: GetGroupUseCase = new GetGroupUseCaseImpl(audienceService);
provide("getGroupUseCase", getGroup);
const addGroup: AddGroupUseCase = new AddGroupUseCaseImpl(audienceService);
provide("addGroupUseCase", addGroup);
const deleteGroup: DeleteGroupUseCase = new DeleteGroupUseCaseImpl(audienceService);
provide("deleteGroupUseCase", deleteGroup);
const getDetailGroup: GetDetailGroupUseCase = new GetDetailGroupUseCaseImpl(audienceService);
provide("getDetailGroupUseCase", getDetailGroup);
const updateGroup: UpdateGroupUseCase = new UpdateGroupUseCaseImpl(audienceService);
provide("updateGroupUseCase", updateGroup);

const userService: UserService = new UserServiceImpl(axiosInstance);
const getLoginHistory: GetLoginHistoryUseCase = new GetLoginHistoryUseCaseImpl(userService);
provide("getLoginHistoryUseCase", getLoginHistory);
const getDashboard: GetDashboardUseCase = new GetDashboardUseCaseImpl(userService);
provide("getDashboardUseCase", getDashboard);
const login: LoginUseCase = new LoginUseCaseImpl(userService);
provide("loginUseCase", login);
const register: RegisterUseCase = new RegisterUseCaseImpl(userService);
provide("registerUseCase", register);
</script>