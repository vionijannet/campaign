import { ResultResp } from "../BaseResp";
import { BaseResp } from "../BaseResp";

export interface LoginResp extends BaseResp {
    result: ResultLogin;
}

interface ResultLogin extends ResultResp {
    data: {
        access_token: string;
        refresh_token: string;
        expired_time: string;
        refresh_expired_time: string;
        full_name: string;
        email: string;
        phone_number: string;
    }
}