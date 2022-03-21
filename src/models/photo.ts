import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Photo = mongoose.model(
  "Photo",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    lastModifiedDate: {
      type: Date,
    },
    location: {
      type: [Number],
      index: "2dsphere",
      default: [0, 0],
    },
    user: {
      type: String,
      required: true,
    },
    trip: {
      type: Schema.Types.ObjectId,
    },

    expense: {
      type: Schema.Types.ObjectId,
    },
  })
);

export default Photo;
