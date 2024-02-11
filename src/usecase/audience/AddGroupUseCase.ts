import { BaseResp } from "@/entity/BaseResp";
import { AddGroupReq } from "@/entity/audience/AddGroupReq";
import { AudienceService } from "@/service/AudienceService";
import { Observable } from "rxjs";

export interface AddGroupUseCase {
    execute(audience: AddGroupReq): Observable<BaseResp>
}

export class AddGroupUseCaseImpl implements AddGroupUseCase {
    constructor(private audienceService: AudienceService) {}

    execute(group: AddGroupReq): Observable<BaseResp> {
        return this.audienceService.addGroup(group);
    }
}