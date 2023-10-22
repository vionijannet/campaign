export interface TemplateMessage {
    template_id: string;
    template_name: string;
    message: Message[];
    preview_message: string;
    created_at: string;
    attachment: MessageAttachment[];
}

export interface Message {
    message: string;
}

export interface MessageAttachment {
    message_attachment?: File;
    filename: string;
    checksum?: string;
}