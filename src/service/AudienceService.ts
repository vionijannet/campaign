import { GetAudienceReq } from "@/entity/audience/GetAudienceReq";
import { GetAudienceResp } from "@/entity/audience/GetAudienceResp";
import { Observable, map } from "rxjs";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";
import { GetGroupReq } from "@/entity/audience/GetGroupReq";
import { GetGroupResp } from "@/entity/audience/GetGroupResp";
import { AddGroupReq } from "@/entity/audience/AddGroupReq";
import { BaseResp } from "@/entity/BaseResp";
import { TextFormatter } from "@/util/TextFormatter";
import { GetDetailGroupReq } from "@/entity/audience/GetDetailGroupReq";
import { GetDetailGroupResp } from "@/entity/audience/GetDetailGroupResp";
import { UpdateGroupReq } from "@/entity/audience/UpdateGroupReq";

export interface AudienceService {
    getAudience(audience: GetAudienceReq): Observable<GetAudienceResp>;

    getGroup(group: GetGroupReq): Observable<GetGroupResp>;
    addGroup(group: AddGroupReq): Observable<BaseResp>;
    updateGroup(group: UpdateGroupReq): Observable<BaseResp>;
    deleteGroup(group: GetDetailGroupReq): Observable<BaseResp>;
    getDetailGroup(group: GetDetailGroupReq): Observable<GetDetailGroupResp>;
}

export class AudienceServiceImpl extends BaseService implements AudienceService {
    readonly AUDIENCE_API_ENDPOINT = "/audience";
    readonly GROUP_API_ENDPOINT = "/group";

    constructor(
        protected axiosClient: AxiosInstance,
    ) {
        super(axiosClient);
    }

    getAudience(audience: GetAudienceReq): Observable<GetAudienceResp> {
        const params: any = {
            page: audience.page,
            limit: audience.limit,
            "audience-name": audience.audience_name,
        };

        return this.httpGet(this.AUDIENCE_API_ENDPOINT, { params })
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }

    getGroup(group: GetGroupReq): Observable<GetGroupResp> {
        const params: any = {
            page: group.page,
            limit: group.limit,
            "group-name": group.group_name,
        };

        return this.httpGet(this.GROUP_API_ENDPOINT, { params })
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }

    addGroup(group: AddGroupReq): Observable<BaseResp> {
        return this.httpPost(this.GROUP_API_ENDPOINT, TextFormatter.convertEmptyPropertyToNull(group))
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            );
    }

    updateGroup(group: UpdateGroupReq): Observable<BaseResp> {
        return this.httpPost(`${this.GROUP_API_ENDPOINT}/${group.group_id}`, TextFormatter.convertEmptyPropertyToNull(group))
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            );
    }

    deleteGroup(group: GetDetailGroupReq): Observable<BaseResp> {
        return this.httpDelete(`${this.GROUP_API_ENDPOINT}/${group.groupId}`)
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }

    getDetailGroup(group: GetDetailGroupReq): Observable<GetDetailGroupResp> {
        return this.httpGet(`${this.GROUP_API_ENDPOINT}/${group.groupId}`)
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }
}