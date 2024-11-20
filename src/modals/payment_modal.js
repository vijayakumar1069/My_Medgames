import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentIntentId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
},
{
    timestamps: true,
});
export default mongoose.models?.Payment || mongoose.model("Payment", paymentSchema);