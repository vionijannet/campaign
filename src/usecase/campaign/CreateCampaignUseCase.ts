import { FieldError } from "@/entity/BaseResp";
import { BaseResp } from "@/entity/BaseResp";
import { CreateCampaignReq } from "@/entity/campaign/CreateCampaignReq";
import { CampaignService } from "@/service/CampaignService";
import { Observable } from "rxjs";

export interface CreateCampaignUseCase {
    validate(template: CreateCampaignReq): FieldError[];
    execute(template: CreateCampaignReq): Observable<BaseResp>
}

export class CreateCampaignUseCaseImpl implements CreateCampaignUseCase {
    constructor(private campaignService: CampaignService) {}

    validate(template: CreateCampaignReq): FieldError[] {
        const error: FieldError[] = [];
        return error;
    }

    execute(template: CreateCampaignReq): Observable<BaseResp> {
        return this.campaignService.createCampaign(template);
    }
}