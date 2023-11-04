export interface Campaign {
    campaign_id: string;
    campaign_name: string;
    page_id: string;
    page_name: string;
    campaign_status: string;
    campaign_date: string | null;
    created_at: string;
    total_amount: number;
    pending_amount: number;
    failed_amount: number;
    success_amount: number;
    isExpanded: boolean;
    clicked?: string;
    read?: string;
}