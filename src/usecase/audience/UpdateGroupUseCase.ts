import { BaseResp, FieldError } from "@/entity/BaseResp";
import { UpdateGroupReq } from "@/entity/audience/UpdateGroupReq";
import { AudienceService } from "@/service/AudienceService";
import { Observable } from "rxjs";

export interface UpdateGroupUseCase {
    validate(group: UpdateGroupReq): FieldError[];
    execute(group: UpdateGroupReq): Observable<BaseResp>
}

export class UpdateGroupUseCaseImpl implements UpdateGroupUseCase {
    constructor(private audienceService: AudienceService) {}

    validate(group: UpdateGroupReq): FieldError[] {
        const errorResult: FieldError[] = [];

        if (group.group_name.length < 1) {
            errorResult.push({
                field: "group_name",
                message: ["Required"]
            });
        }
        
        if (group.audience_list.length < 1) {
            errorResult.push({
                field: "audience_list",
                message: ["Required"]
            });
        }

        return errorResult;
    }

    execute(group: UpdateGroupReq): Observable<BaseResp> {
        return this.audienceService.updateGroup(group);
    }
}