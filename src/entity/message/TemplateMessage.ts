export interface TemplateMessage {
    templateId: string;
    name: string;
    message: Message[];
    previewMessage: string;
    createdAt: string;
    attachment: MessageAttachment[];
}

export interface Message {
    message: string;
}

export interface MessageAttachment {
    messageAttachment: File;
    checksum: string;
}