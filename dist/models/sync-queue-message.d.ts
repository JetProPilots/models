declare const mongoose: any;
declare const Schema: any;
declare const SyncQueueMessage: {
    syncId: {
        type: StringConstructor;
        required: boolean;
    };
    employeeId: {
        type: StringConstructor;
        required: boolean;
    };
    timestamp: {
        type: DateConstructor;
        required: boolean;
        default: () => number;
    };
    status: {
        type: StringConstructor;
        required: boolean;
        enum: string[];
    };
    errors: {
        type: StringConstructor;
        required: boolean;
    }[];
};
