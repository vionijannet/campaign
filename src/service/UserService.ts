import { GetLoginHistoryReq } from "@/entity/user/GetLoginHistoryReq";
import { GetLoginHistoryResp } from "@/entity/user/GetLoginHistoryResp";
import { Observable, map } from "rxjs";
import { BaseService } from "./BaseService";
import { AxiosInstance } from "axios";
import { GetDashboardResp } from "@/entity/user/GetDashboardResp";
import { RegisterReq } from "@/entity/user/RegisterReq";
import { RegisterResp } from "@/entity/user/RegisterResp";
import { TextFormatter } from "@/util/TextFormatter";
import { LoginReq } from "@/entity/user/LoginReq";
import { LoginResp } from "@/entity/user/LoginResp";

export interface UserService {
    getLoginHistory(history: GetLoginHistoryReq): Observable<GetLoginHistoryResp>;
    getDashboard(): Observable<GetDashboardResp>;
    register(data: RegisterReq): Observable<RegisterResp>;
    login(data: LoginReq): Observable<LoginResp>;
}

export class UserServiceImpl extends BaseService implements UserService {
    readonly API_ENDPOINT = "/user";

    constructor(
        protected axiosClient: AxiosInstance,
    ) {
        super(axiosClient);
    }

    getLoginHistory(history: GetLoginHistoryReq): Observable<GetLoginHistoryResp> {
        const params: any = {
            page: history.page,
            limit: history.limit,
        }

        if (history.sort_by?.trim().length > 0) {
            params["sort-by"] = history.sort_by;
        }

        return this.httpGet(`${this.API_ENDPOINT}/history-log`, { params })
            .pipe(
                map((response) => {
                    return JSON.parse(JSON.stringify(response.data as string))
                })
            )
    }

    getDashboard(): Observable<GetDashboardResp> {
        return this.httpGet(`${this.API_ENDPOINT}/dashboard`)
            .pipe(
                map((response) => {
                    return JSON.parse(JSON.stringify(response.data as string))
                })
            )
    }

    register(data: RegisterReq): Observable<RegisterResp> {
        return this.httpPost("/auth/register", TextFormatter.convertEmptyPropertyToNull(data))
            .pipe(
                map((response) => {
                    const tempResp: any = response;
                    if (tempResp.data)
                        return JSON.parse(JSON.stringify(response.data as string))
                    return JSON.parse(JSON.stringify(tempResp as string))
                })
            )
    }

    login(data: LoginReq): Observable<LoginResp> {
        return this.httpPost("/auth/login", TextFormatter.convertEmptyPropertyToNull(data))
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