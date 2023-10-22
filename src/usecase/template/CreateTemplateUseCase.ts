import { BaseResp } from "@/entity/BaseResp";
import { CreateTemplateReq } from "@/entity/message/CreateTemplateReq";
import { TemplateService } from "@/service/TemplateService";
import { Observable } from "rxjs";

export interface CreateTemplateUseCase {
    execute(template: CreateTemplateReq): Observable<BaseResp>
}

export class CreateTemplateUseCaseImpl implements CreateTemplateUseCase {
    constructor(private templateService: TemplateService) {}

    execute(template: CreateTemplateReq): Observable<BaseResp> {
        return this.templateService.createTemplate(template);
    }
}