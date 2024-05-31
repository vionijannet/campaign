import { GetAccountReq } from "@/entity/facebook/GetAccountReq";
import { GetAccountResp } from "@/entity/facebook/GetAccountResp";
import { FacebookService } from "@/service/FacebookService";
import { Observable } from "rxjs";

export interface GetAccountUseCase {
    execute(req: GetAccountReq): Observable<GetAccountResp>
}

export class GetAccountUseCaseImpl implements GetAccountUseCase {
    constructor(private pageService: FacebookService) {}

    execute(req: GetAccountReq): Observable<GetAccountResp> {
        return this.pageService.getAccount(req);
    }
}