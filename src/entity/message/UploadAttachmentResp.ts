import { ResultResp } from "../BaseResp";
import { BaseResp } from "../BaseResp";

export interface UploadAttachmentResp extends BaseResp {
    result: ResultUpload;
}

interface ResultUpload extends ResultResp {
    data: {
        filename: string;
        url: string;
    }
}