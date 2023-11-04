import { BaseResp, ResultResp } from "@/entity/BaseResp";
import { Page } from "./Page";

export interface GetPageResp extends BaseResp {
    result: ResultPage;
}

interface ResultPage extends ResultResp {
    data: {
        content: Page[];
        total_elements: number;
    }
}