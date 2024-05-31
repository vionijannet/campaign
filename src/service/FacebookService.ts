import { Observable, map } from "rxjs";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";
import { GetFacebookLinkedReq } from "@/entity/facebook/GetFacebookLinkedReq";
import { GetFacebookLinkedResp } from "@/entity/facebook/GetFacebookLinkedResp";
import { BaseResp } from "@/entity/BaseResp";
import { GetAccountResp } from "@/entity/facebook/GetAccountResp";
import { GetAccountReq } from "@/entity/facebook/GetAccountReq";

export interface FacebookService {
    getFacebookLinked(template: GetFacebookLinkedReq): Observable<GetFacebookLinkedResp>;
    getAccount(code: GetAccountReq): Observable<GetAccountResp>;
}

export class FacebookServiceImpl extends BaseService implements FacebookService {
    readonly API_ENDPOINT = "/facebooklinked";

    constructor(
        protected axiosClient: AxiosInstance,
    ) {
        super(axiosClient);
    }

    getFacebookLinked(template: GetFacebookLinkedReq): Observable<GetFacebookLinkedResp> {
        const params: any = {
            page: template.page,
            limit: template.limit,
        }

        if (template.sort_by?.trim().length > 0) {
            params["sort-by"] = template.sort_by;
        }

        if (template.facebook_linked_name?.trim().length > 0) {
            params["facebook-linked-name"] = template.facebook_linked_name;
        }

        return this.httpGet(this.API_ENDPOINT, { params })
            .pipe(
                map((response) => {
                    return JSON.parse(JSON.stringify(response.data as string))
                })
            )
    }

    getAccount(req: GetAccountReq): Observable<GetAccountResp> {
        return this.httpGet(`/auth/login/fb?code=${req.code}`)
            .pipe(
                map((response) => {
                    const tempResp: any = response;
                    if (tempResp.data)
                        return JSON.parse(JSON.stringify(response.data as string))
                    return JSON.parse(JSON.stringify(tempResp as string))
                })
            )
    }
}