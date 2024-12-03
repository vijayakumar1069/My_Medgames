import mongoose from "mongoose";

const request_a_call_schema = new mongoose.Schema({
    mobile_number:
    {
        type: String,
        required: true,
        unique: true
        // Add validation to ensure the phone number is a valid phone number format

    }
})

const Reques_A_Call = mongoose.models?.Reques_A_Call || mongoose.model('Reques_A_Call', request_a_call_schema);

export default Reques_A_Call;