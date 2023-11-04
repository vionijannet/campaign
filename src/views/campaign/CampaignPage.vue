<template>
    <div class="absolute -top-2 right-0 my-6 mx-8">
        <div class="flex space-x-4">
            <Search />
            <ButtonBase class="flex !w-fit" @click="redirectToCreate">
                <img src="../../assets/icon-create.svg" alt="Create">
                <span class="ml-2">Create</span>
            </ButtonBase>
        </div>
    </div>
    <div>
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="campaignList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #name="{slotProps}">
                <div class="flex items-center space-x-2 p-2">
                    <svg @click="slotProps.isExpanded = !slotProps.isExpanded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 transform transition-all cursor-pointer" :class="slotProps.isExpanded ? 'rotate-90' : ''">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span>{{ slotProps.campaign_name }}</span>
                </div>
            </template>
            <template #status="{slotProps}">
                <div class="p-2" :class="{'text-amber-500': slotProps.campaign_status === STATUS_PENDING, 'text-green-500': slotProps.campaign_status === STATUS_DONE}">
                    {{ slotProps.campaign_status }}
                </div>
            </template>
            <template #action="{slotProps}">
                <div class="flex items-center space-x-4">
                    <img src="../../assets/manual-trigger.svg" title="Manual Trigger" alt="Manual Trigger" class="cursor-pointer" @click="manualTriggerCampaign(slotProps.id)" />
                    <img src="../../assets/update.svg" title="Update" alt="Update" class="cursor-pointer" @click="redirectToUpdateCampaign(slotProps.id)" />
                    <img src="../../assets/trash.svg" title="Delete" alt="Delete" class="cursor-pointer" @click="deleteCampaign(slotProps.id)" />
                </div>
            </template>
            <template #expand="{slotProps}">
                <div class="bg-blue-100 p-2 pl-8 mx-2">
                    <div class="grid grid-cols-6 auto-cols-fr text-sm gap-y-1">
                        <p>Created at</p>
                        <p class="col-span-5">{{ slotProps.created_at }}</p>
                        <p>Delivered(%)</p>
                        <p class="col-span-5">{{ slotProps.success_amount }}/{{ slotProps.total_amount }} ({{ percentageDeliver(slotProps) }})</p>
                    </div>
                </div>
            </template>
        </TableExpandComponent>
    </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import TableExpandComponent from '@/components/table/TableExpandComponent.vue';
import Search from '@/components/search/Search.vue';
import router from "@/router";
import { ref, type Ref } from 'vue';
import { Campaign } from "@/entity/campaign/Campaign";
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';

const STATUS_PENDING = "Pending";
const STATUS_DONE = "Done";

function redirectToCreate(): void {
    router.push("/campaign/create");
}

const campaignList: Ref<Campaign[]> = ref([
    {
        campaign_id: "id-01",
        campaign_name: "Campaign Name Here",
        page_id: "p-01",
        page_name: "Page Name",
        campaign_status: "Pending",
        campaign_date: null,
        pending_amount: 5,
        failed_amount: 3,
        success_amount: 2,
        total_amount: 10,
        created_at: "28 October 2022, 11:03",
        isExpanded: false,
    },
    {
        campaign_id: "id-02",
        campaign_name: "Campaign Name Here 2",
        page_id: "p-01",
        page_name: "Page Name",
        campaign_status: "Done",
        campaign_date: "30 October 2022, 14:30",
        pending_amount: 5,
        failed_amount: 3,
        success_amount: 2,
        total_amount: 10,
        created_at: "18 October 2022, 11:03",
        isExpanded: false,
    },
]);

const searchCriteria: Ref<SearchCriteria> = ref({
    page: 1,
    rowPerPage: 10,
    sortKey: "name",
    sortOrder: "asc"
});

const totalRow: Ref<number> = ref(2);

const tableHeader: Ref<TableHeader[]> = ref([
    {
        key: "name",
        name: "Name",
        isSortable: true
    },
    {
        key: "page_name",
        name: "Page Name",
        isSortable: true
    },
    {
        key: "status",
        name: "Status",
        isSortable: true
    },
    {
        key: "success_amount",
        name: "Sent",
        isSortable: false
    },
    {
        key: "failed_amount",
        name: "Failed",
        isSortable: false
    },
    {
        key: "campaign_status",
        name: "Scheduled",
        isSortable: false
    },
    {
        key: "action",
        name: "Action",
        isSortable: false
    },
] as TableHeader[]);

function manualTriggerCampaign(campaignId: string): void {
    console.log("manual trigger campaign", campaignId);
}

function redirectToUpdateCampaign(campaignId: string): void {
    router.push(`/campaign/${campaignId}`);
}

function deleteCampaign(campaignId: string): void {
    console.log("delete", campaignId);
}

function percentageDeliver(data: Campaign): string {
    if (data.total_amount > 0) {
        return `${(data.success_amount / data.total_amount) * 100} %`;
    }
    return "0%"
}
</script>