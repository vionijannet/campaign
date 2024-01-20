import { GetAudienceReq } from "@/entity/audience/GetAudienceReq";
import { GetAudienceResp } from "@/entity/audience/GetAudienceResp";
import { Observable, map } from "rxjs";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";

export interface AudienceService {
    getAudience(audience: GetAudienceReq): Observable<GetAudienceResp>;
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
}