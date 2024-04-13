import { UploadAttachmentResp } from "@/entity/message/UploadAttachmentResp";
import { TemplateService } from "@/service/TemplateService";
import { Observable } from "rxjs";

export interface UploadAttachmentUseCase {
    execute(file: File): Observable<UploadAttachmentResp>;
}

export class UploadAttachmentUseCaseImpl implements UploadAttachmentUseCase {
    constructor(private templateService: TemplateService) {}

    execute(file: File): Observable<UploadAttachmentResp> {
        return this.templateService.uploadAttachment(file);
    }
}