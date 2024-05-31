import { ResultResp } from "../BaseResp";
import { BaseResp } from "../BaseResp";

export interface RegisterResp extends BaseResp {
    result: ResultRegister;
}

interface ResultRegister extends ResultResp {
    data: {
        access_token: string;
        refresh_token: string;
        expired_time: string;
        refresh_expired_time: string;
        role: string;
    }
}