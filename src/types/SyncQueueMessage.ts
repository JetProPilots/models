export type SyncQueueMessage = {
  syncId: string;
  employeeId: string;
  timestamp: Date;
  errors: string[];
};
