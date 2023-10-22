import { Observable, map } from "rxjs";
import { GetTemplateReq } from "@/entity/message/GetTemplateReq";
import { GetTemplateResp } from "@/entity/message/GetTemplateResp";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";

export interface TemplateService {
    getTemplate(template: GetTemplateReq): Observable<GetTemplateResp>;
}

export class TemplateServiceImpl extends BaseService implements TemplateService {
    readonly API_ENDPOINT = "/template";

    constructor(
        protected axiosClient: AxiosInstance,
    ) {
        super(axiosClient);
    }

    getTemplate(template: GetTemplateReq): Observable<GetTemplateResp> {
        const params: any = {
            page: template.page,
            limit: template.limit,
        }

        if (template.sort_by?.trim().length > 0) {
            params["sort-by"] = template.sort_by;
        }

        if (template.template_name?.trim().length > 0) {
            params["template-name"] = template.template_name;
        }

        return this.httpGet(this.API_ENDPOINT, { params })
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )

    }
}