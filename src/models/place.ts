import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Place = mongoose.model(
  "Place",
  new Schema({
    city: {
      type: String,
      required: true,
      uppercase: true,
    },
    state: {
      type: String,
      uppercase: true,
    },
    zip: {
      type: String,
      required: true,
    },
    location: {
      type: [Number],
      index: "2dsphere",
    },
  })
);

export default Place;
