import { Observable, map } from "rxjs";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";
import { GetCampaignReq } from "@/entity/campaign/GetCampaignReq";
import { GetCampaignResp } from "@/entity/campaign/GetCampaignResp";

export interface CampaignService {
    getCampaign(template: GetCampaignReq): Observable<GetCampaignResp>;
}

export class CampaignServiceImpl extends BaseService implements CampaignService {
    readonly API_ENDPOINT = "/campaign";

    constructor(
        protected axiosClient: AxiosInstance,
    ) {
        super(axiosClient);
    }

    getCampaign(template: GetCampaignReq): Observable<GetCampaignResp> {
        const params: any = {
            page: template.page,
            limit: template.limit,
        }

        if (template.sort_by?.trim().length > 0) {
            params["sort-by"] = template.sort_by;
        }

        if (template.campaign_name?.trim().length > 0) {
            params["campaign-name"] = template.campaign_name;
        }

        if (template.page_name?.trim().length > 0) {
            params["page-name"] = template.page_name;
        }

        return this.httpGet(this.API_ENDPOINT, { params })
            .pipe(
                map((response) => {
                    return JSON.parse(JSON.stringify(response.data as string))
                })
            )
    }
}