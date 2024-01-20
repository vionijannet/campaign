<template>
    <div class="absolute -top-2 right-0 my-6 mx-8">
        <div class="flex space-x-4">
            <Search />
        </div>
    </div>
    <div>
        <TableExpandComponent class="mb-2" :table-header="tableHeader" :table-body="audiensList" :search-criteria="searchCriteria" :total-row="totalRow">
            <template #audience_name="{slotProps}">
                <div class="p-2 flex space-x-2 items-center">
                    <img :src="slotProps.audience_photo" :alt="`Picture of ${slotProps.audience_name}`">
                    <p>{{ slotProps.audience_name }}</p>
                </div>
            </template>
        </TableExpandComponent>
    </div>
</template>

<script setup lang="ts">
import TableExpandComponent from '@/components/table/TableExpandComponent.vue';
import { ref, type Ref } from 'vue';
import { Audience } from "@/entity/audience/Audience";
import { SearchCriteria, TableHeader } from '@/components/ComponentEntity';
import Search from '@/components/search/Search.vue';

function redirectToCreate(): void {
    console.log("pop up to create category");
}

const audiensList: Ref<Audience[]> = ref([
    {
        audience_id: "a-01",
        audience_name: "John Doe",
        audience_photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAAAXNSR0IArs4c6QAABI1JREFUaEPNWjssdEEY/VYjHoV3QkShIBGFSGhQI1FpFEpEQhA9IkSLeEZHRKGhkygFlcRGwopGRHZX4dkgGvvnzJ+5Zu/ex8zcWWuadXfvPXO+c77vm3vdCYXD4URpaSmFQiEyMUzhJBIJenx8pFAkEknk5eVRVVWVCX7GMO7v7+nj44NCsVgs8fLyQpWVlVRQUGBsgiBAb29vFI1GqaioiELxeDyRk5PDvqirq6OsrKwg2IGv/f7+pkgkwgSzFKyoqCBIipFpq0Ue8Xj8v4Ll5eUkMs+U1dxa7iQjiByEghj2EwL7pQDgJNDDw0MyQeBlymqneZMs5sFmwmo35xwJ/rbVXoK4EvxNq71SiuUgr2J7Pv+G1X5FmVLFdpJ+AApFmnKqjAC+BNNptUy38MzBdFa1rDOeOSh6IgsoY7mMtRxHSkF+sowlMgRVcKQVxMQqkbsRVXVCqkhMWa0ToONa7GeTikUils51WgR1lFC1lgemRVB1rdYJKImg21Jnymoda40QlFFG19rAFnMALwIyAfi5pJ2DMtUZxFpjCro18KDWGiVor2oc8+faoE+HSkudX75wS/l5Jp6vjRJEUVxeXjJ+9fX1Rv5DYaRIxPvGP00wHRYr383I3EaZLBIjBJ0asqk2Y4SgW0M20agDE0z3UheIoMxaG9TqQARlLZQ9z6kAtQmqKCOjtFt30CKoM6FKQCJZLYK6lulcp0xQVwnd52olgjrW2nNLNUAlgjoWOSW/Co40QdXIve4dVZyQIqgC6HdTK/OwpVzFKpbIEsR5Mri+Cpq01k5exhlPgtfX19Tf30+Li4vU1NTE8G9ubqinp4cuLi5ocHCQFhYWCC8i/cbp6Sm1tray09rb22lnZ4eKi4vZm62TkxOamJhwxHQl+Pn5SQMDAxQOh2lvb49qa2sJ342Pj1NbWxt1d3dbf/f29nry40Gtrq5SS0sLI3d8fMyCw8A8zc3N7JPjc0xXgoeHhzQzM0P5+fm0tLTECGKi0dFR6xiqbG9v+6oIQre3tzQ5OZkSCMccGRlhCl9dXSVhOhLEa/jh4WHq6+uj+fn5JEKzs7OWPSDIj9fW1gjH3Dr8DYytrS1aX19nqjspzTFwPd4Nv76+0tzcnIXjSBCK8VzxUgzRT09P08rKCssnkMUYGhpiZKBYY2Mjs62zs5MRhTNiDoouQBgovbGxYWGmEDw7O2NAy8vL7A28CsHn52dGjKcHCPK8vbu7s1RBILFYjKXG+fm5ZWl2djYdHBzQ5uYmI4mgkwii7MfGxqirq4tF6ZRzbhYDDAMWIy+51WJhcYtF3KenJytNgIHgMMf+/j5hJ0oSQbQOEDw6OkpJZrSCkpKSJEvtRcInxsVIeF4UmLC6utrKQTE1QFBME2DCwampKaqpqfkhmJubm7Kpwq6gV5sRf+vo6LByEG1FLCYxV8UUEFsXgmtoaPjZVBGNRhOoHvu2FDtBt0aN71EIGLxx8yre3d1lLUps1PYG79T8v76+mGCFhYV/e2PP+/s7hbA1qqysjCkgbmvC1iQcq3z6LXkqv/OtUf8ACSwjqMJOUToAAAAASUVORK5CYII=",
        tag: "entertainment",
        status: "Active",
        created_at: "30 October 2021, 14:30",
        group_list: [],
        is_deleted: false,
        page_id: "",
        page_name: "",
    },{
        audience_id: "a-02",
        audience_name: "Jane Doe",
        audience_photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAIAAAD07OL5AAABjklEQVR4nOzX3yt7cRzH8XO+rb6uUFxw1iJxI8vFXKiVX0V+ZBeIi6WwpqQkIVJKGdOoXQxpNaW0lJqLUXaxsptlLGVTU35cTBONLewMZbny+vwBcvHp83lfPd4X61nvi51zFIvGQeFndJoQ3C27YIP5GW6KrsKm5nv4/44HLlIG4H/CHw8P8MDvR/GZUmKJuk1w0mGHbXVWeMRyB6sCMXi+fwau/MqG6T8RDzAQEPesGSwxbTvsbW2AM8U6WArOkl+nbGB5/QXsUOth+k/EAwwExIinEMvA5j5xG2nb3WtwXu0UPJw8gie2jHBSKIPpPxEPMBAQ/e8PWLSNt7D9qQLW93bBVadpuMV1BufunsD+806Y/hPxAAMBhS84hqU0ZIHl6QW4+uoDTm8vw+ZR8iwRatTgkCYB038iHmAgICZ841hyDOR/PHycBUsrJfCj1AEbJg/gpZQT7olswPSfiAcYCIg3zj4sb6+XsBQn3wGqwwI4ni/Dc+svsNdK3ovC1xGY/hPxAAOB7wAAAP//u2xofqwWhNYAAAAASUVORK5CYII=",
        tag: "activity",
        status: "Active",
        created_at: "12 October 2022, 14:30",
        group_list: [],
        is_deleted: false,
        page_id: "",
        page_name: "",
    },
]);

const searchCriteria: Ref<SearchCriteria> = ref({
    page: 1,
    rowPerPage: 10,
    sortKey: "audience_name",
    sortOrder: "asc"
});

const totalRow: Ref<number> = ref(2);

const tableHeader: Ref<TableHeader[]> = ref([
    {
        key: "audience_name",
        name: "Audience List",
        isSortable: true
    },
    {
        key: "tag",
        name: "Tag",
        isSortable: true
    },
    {
        key: "status",
        name: "Status",
        isSortable: true
    },
    {
        key: "created_at",
        name: "Created At",
        isSortable: true
    }
] as TableHeader[]);
</script>