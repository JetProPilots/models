export interface SyncErrorLog {
    syncId: string;
    message: string;
    ts: Date;
    trace: string;
    meta: any;
}
