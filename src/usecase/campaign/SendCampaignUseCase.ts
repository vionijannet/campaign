import { GetDetailCampaignReq } from "@/entity/campaign/GetDetailCampaignReq";
import { CampaignService } from "@/service/CampaignService";
import { Observable } from "rxjs";
import { BaseResp } from "@/entity/BaseResp";

export interface SendCampaignUseCase {
    execute(campaign: GetDetailCampaignReq): Observable<BaseResp>
}

export class SendCampaignUseCaseImpl implements SendCampaignUseCase {
    constructor(private campaignService: CampaignService) {}

    execute(campaign: GetDetailCampaignReq): Observable<BaseResp> {
        return this.campaignService.sendCampaign(campaign);
    }
}