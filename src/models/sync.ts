import mongoose from "mongoose";
import { SYNC_STATUS } from "../types/SyncStatus";
const Schema = mongoose.Schema;

const Sync = mongoose.model(
  "Sync",
  new Schema({
    status: {
      type: String,
      required: true,
      enum: [
        SYNC_STATUS.COMPLETE,
        SYNC_STATUS.FAILED,
        SYNC_STATUS.READY,
        SYNC_STATUS.STARTING,
        SYNC_STATUS.STOPPED,
        SYNC_STATUS.SYNCING,
      ],
      default: SYNC_STATUS.READY,
    },
    progress: { type: String, default: "0" },
    task: { type: Number, default: 0 },
    totalTasks: { type: Number, default: 0 },
    employees: { type: Number, default: 0 },
    created: { type: Number, default: 0 },
    updated: { type: Number, default: 0 },
    skipped: { type: Number, default: 0 },
    start: { type: Date },
    end: { type: Date },
    resumed: { type: [Date], default: [] },
    execution: { type: String },
  })
);

export default Sync;
