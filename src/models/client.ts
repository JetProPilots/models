import mongoose from "mongoose";
const Schema = mongoose.Schema;

// create the model for clients and expose it to our app
const Client = mongoose.model(
  "Client",
  new Schema({
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
  })
);

export default Client;
