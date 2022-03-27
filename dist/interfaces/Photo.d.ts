import { Schema } from 'mongoose';
export interface Photo {
    name: string;
    contentType: string;
    data: string;
    lastModifiedDate: Date;
    location: [Schema.Types.Number];
    user: Schema.Types.ObjectId;
    trip: Schema.Types.ObjectId;
    expense: Schema.Types.ObjectId;
}
