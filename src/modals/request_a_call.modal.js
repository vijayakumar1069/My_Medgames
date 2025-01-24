import mongoose from "mongoose";

const request_a_call_schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const Reques_A_Call =
  mongoose.models?.Reques_A_Call ||
  mongoose.model("Reques_A_Call", request_a_call_schema);

export default Reques_A_Call;
