import { FieldError } from "@/entity/BaseResp";
import { BaseResp } from "@/entity/BaseResp";
import { UpdateCampaignReq } from "@/entity/campaign/UpdateCampaignReq";
import { CampaignService } from "@/service/CampaignService";
import { Observable } from "rxjs";

export interface UpdateCampaignUseCase {
    validate(template: UpdateCampaignReq): FieldError[];
    execute(template: UpdateCampaignReq): Observable<BaseResp>
}

export class UpdateCampaignUseCaseImpl implements UpdateCampaignUseCase {
    constructor(private campaignService: CampaignService) {}

    validate(template: UpdateCampaignReq): FieldError[] {
        const error: FieldError[] = [];
        return error;
    }

    execute(template: UpdateCampaignReq): Observable<BaseResp> {
        return this.campaignService.updateCampaign(template);
    }
}