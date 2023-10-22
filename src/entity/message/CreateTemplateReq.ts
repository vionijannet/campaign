export interface CreateTemplateReq {
    template_name: string;
    message_list: NewMessage[];
}

interface NewMessage {
    message: string;
    message_type: string;
    message_order: string;
}