import { Message } from "../message/TemplateMessage";

export interface CreateCampaignReq {
    page_id: string;
    campaign_name: string;
    is_scheduled: boolean;
    scheduled_date: string;
    message_list: Message[];
    template_id: string;
    interval_min: number;
    interval_max: number;
    audience_list: string[];
}