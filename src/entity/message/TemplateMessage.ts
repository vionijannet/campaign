export interface TemplateMessage {
    template_id: string;
    template_name: string;
    message_list: Message[];
    preview_message: string;
    created_at: string;
    attachment: MessageAttachment[];
}

export interface Message {
    message_id: string;
    message_order: string;
    message_type: "Greeting" | "Message";
    message_content: string;
}

export interface MessageAttachment {
    message_attachment?: File;
    filename: string;
    checksum?: string;
}