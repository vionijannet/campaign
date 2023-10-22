import { Observable, map } from "rxjs";
import { GetTemplateReq } from "@/entity/message/GetTemplateReq";
import { GetTemplateResp } from "@/entity/message/GetTemplateResp";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";
import { GetDetailTemplateReq } from "@/entity/message/GetDetailTemplateReq";
import { GetDetailTemplateResp } from "@/entity/message/GetDetailTemplateResp";

export interface TemplateService {
    getTemplate(template: GetTemplateReq): Observable<GetTemplateResp>;
    getDetailTemplate(template: GetDetailTemplateReq): Observable<GetDetailTemplateResp>;
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

    getDetailTemplate(template: GetDetailTemplateReq): Observable<GetDetailTemplateResp> {
        const params = {
            "template-id": template.template_id
        };

        return this.httpGet(`${this.API_ENDPOINT}/detail`, { params })
            .pipe(
                map((response) => JSON.parse(JSON.stringify(response.data as string)))
            )
    }
}