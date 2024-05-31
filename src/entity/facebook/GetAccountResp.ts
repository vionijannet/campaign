import { BaseResp, ResultResp } from "@/entity/BaseResp";

export interface GetAccountResp extends BaseResp {
    result: ResultAccount;
}

interface ResultAccount extends ResultResp {
    data: {
        facebook_linked_id: string;
        facebook_name: string;
    };
}