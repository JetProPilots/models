export type SyncStatus =
  | "READY"
  | "STARTING"
  | "SYNCING"
  | "COMPLETE"
  | "STOPPED"
  | "FAILED";

export const SYNC_STATUS = {
  READY: "READY",
  STARTING: "STARTING",
  SYNCING: "SYNCING",
  COMPLETE: "COMPLETE",
  STOPPED: "STOPPED",
  FAILED: "FAILED",
};
