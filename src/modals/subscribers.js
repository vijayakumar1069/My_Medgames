import mongoose from "mongoose";

const Subscribe_Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Subscriber =
  mongoose.models?.Subscriber || mongoose.model("Subscriber", Subscribe_Schema);

export default Subscriber;
