import { GetAudienceReq } from "@/entity/audience/GetAudienceReq";
import { GetAudienceResp } from "@/entity/audience/GetAudienceResp";
import { Observable, map } from "rxjs";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";
import { GetGroupReq } from "@/entity/audience/GetGroupReq";
import { GetGroupResp } from "@/entity/audience/GetGroupResp";

export interface AudienceService {
    getAudience(audience: GetAudienceReq): Observable<GetAudienceResp>;
    getGroup(group: GetGroupReq): Observable<GetGroupResp>;
}

export class AudienceServiceImpl extends BaseService implements AudienceService {
    readonly API_ENDPOINT = "/audience";

    constructor(
        protected axiosClient: AxiosInstance,
    ) {
        super(axiosClient);
    }

    getAudience(audience: GetAudienceReq): Observable<GetAudienceResp> {
        const params: any = {
            page: audience.page,
            limit: audience.limit,
        };

        return this.httpGet(this.API_ENDPOINT, { params })
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }

    getGroup(group: GetGroupReq): Observable<GetGroupResp> {
        const params: any = {
            page: group.page,
            limit: group.limit,
        };

        return this.httpGet("/group", { params })
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }
}