import { BaseResp } from "@/entity/BaseResp";
import { UpdateTemplateReq } from "@/entity/message/UpdateTemplateReq";
import { TemplateService } from "@/service/TemplateService";
import { Observable } from "rxjs";

export interface UpdateTemplateUseCase {
    execute(template: UpdateTemplateReq): Observable<BaseResp>
}

export class UpdateTemplateUseCaseImpl implements UpdateTemplateUseCase {
    constructor(private templateService: TemplateService) {}

    execute(template: UpdateTemplateReq): Observable<BaseResp> {
        return this.templateService.updateTemplate(template);
    }
}