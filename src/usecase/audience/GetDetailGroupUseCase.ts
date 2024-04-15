import { GetDetailGroupReq } from "@/entity/audience/GetDetailGroupReq";
import { GetDetailGroupResp } from "@/entity/audience/GetDetailGroupResp";
import { AudienceService } from "@/service/AudienceService";
import { Observable } from "rxjs";

export interface GetDetailGroupUseCase {
    execute(audience: GetDetailGroupReq): Observable<GetDetailGroupResp>
}

export class GetDetailGroupUseCaseImpl implements GetDetailGroupUseCase {
    constructor(private audienceService: AudienceService) {}

    execute(group: GetDetailGroupReq): Observable<GetDetailGroupResp> {
        return this.audienceService.getDetailGroup(group);
    }
}