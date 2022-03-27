export interface SyncQueueMessage {
    syncId: string;
    employeeId: string;
    timestamp: Date;
    errors: string[];
}
