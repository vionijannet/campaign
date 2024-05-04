<template>
    <div class="relative space-y-2">
        <div class="flex items-center pb-2">
            <label for="audiens" class="flex items-center space-x-3">
                <input type="checkbox" name="audiens" id="audiens" @change="onChangeAll($event)" />
                <span class="font-semibold">Select Audience</span>
            </label>
        </div>
        <div class="pb-4 space-y-2">
            <p class="font-semibold">Filter Flag</p>
            <div class="flex flex-wrap">
                <div v-for="g in props.groupList" :key="g.group_id" :title="g.group_name"
                    class="inline w-9 h-9 m-1 rounded cursor-pointer" :style="{'background-color': g.group_color_hex}"
                    :class="selectedGroupId === g.group_id ? 'border-black border-2' : ''"
                    @click="setSelectedGroupId(g.group_id)">
                </div>
            </div>
        </div>
        <CheckboxAudience v-for="a in audienceList" :key="a.audience_id" :id="a.audience_id"
            :name="a.audience_name" :checked="dataToEmit" @select="onChangeAudience">
        </CheckboxAudience>
    </div>
    <div class="pt-8 flex justify-center space-x-8">
        <ButtonBase type="error" class="w-32" @click="$emit('cancel')">Cancel</ButtonBase>
        <ButtonBase class="w-32" @click="$emit('continue', dataToEmit)">Done</ButtonBase>
    </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/button/ButtonBase.vue';
import CheckboxAudience from '@/components/in-app/CheckboxAudience.vue';
import { Audience } from '@/entity/audience/Audience';
import { GetDetailGroupUseCase } from '@/usecase/audience/GetDetailGroupUseCase';
import { computed } from '@vue/reactivity';
import { finalize } from 'rxjs';
import { Ref, inject, onMounted, ref, watch } from 'vue';

const isLoading = ref(false);

const emit = defineEmits(["continue", "cancel"])
const props = defineProps(["audience_list", "checkedAudience", "groupList"]);

const getDetailGroupUseCase: GetDetailGroupUseCase = inject("getDetailGroupUseCase")!;

const selectedGroupId = ref("");
const audienceFromGroup: Ref<Audience[]> = ref([]);

const dataToEmit: Ref<string[]> = ref([]);

onMounted(() => {
    dataToEmit.value = JSON.parse(JSON.stringify(props.checkedAudience));
})

function onChangeAudience(audienceId: string, check: boolean) {
    if (check) {
        dataToEmit.value.push(audienceId);
    } else {
        const indexToRemove = dataToEmit.value.findIndex(data => data === audienceId);
        dataToEmit.value.splice(indexToRemove, 1);
    }
}

const audienceList: Ref<Audience[]> = computed(() => {
    if (selectedGroupId.value.length < 1) {
        return props.audience_list;
    } return audienceFromGroup.value;
})

watch(selectedGroupId, () => {
    if (selectedGroupId.value.length > 0) {
        isLoading.value = true;
    
        getDetailGroupUseCase.execute({
            groupId: selectedGroupId.value
        }).pipe(
            finalize(() => isLoading.value = false)
        ).subscribe(
            {
                next: (groupResp) => {
                    if (groupResp.code === 200) {
                        audienceFromGroup.value = [];
                        audienceFromGroup.value = groupResp.result.data.audience_list;
                    } else {
                        audienceFromGroup.value = [];
                    }
                },
                error: () => {
                    audienceFromGroup.value = [];
                }
            }
        )
    }
});

function setSelectedGroupId(groupId: string): void {
    selectedGroupId.value = selectedGroupId.value.length < 1 || selectedGroupId.value !== groupId ?
        groupId : "";
}

function onChangeAll(e: Event): void {
    const target = e.target as HTMLInputElement;
    const checked = target.checked;

    audienceList.value.forEach(data => {
        const index = dataToEmit.value.findIndex(id => id === data.audience_id);
        if (checked && index < 0) {
            dataToEmit.value.push(data.audience_id);
        } else if (!checked && index > -1) {
            dataToEmit.value.splice(index, 1);
        }
    })
}
</script>