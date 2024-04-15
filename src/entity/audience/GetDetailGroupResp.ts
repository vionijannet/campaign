import { BaseResp, ResultResp } from "@/entity/BaseResp";
import { Group } from "./Group";

export interface GetDetailGroupResp extends BaseResp {
    result: ResultGroup;
}

interface ResultGroup extends ResultResp {
    data: Group;
}