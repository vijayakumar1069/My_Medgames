import mongoose from "mongoose";

const request_a_call_schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // if you want email to be unique
  },
});

// Function to clean up indexes
async function cleanupIndexes() {
  try {
    // Get the collection
    const collection = mongoose.connection.collection("reques_a_calls");

    // Drop the problematic mobile_number index
    await collection.dropIndex("mobile_number_1");
    console.log("Successfully dropped mobile_number index");
  } catch (error) {
    // If the index doesn't exist, that's fine
    if (error.code !== 27) {
      console.error("Error dropping index:", error);
    }
  }
}

// Call this after mongoose connects
mongoose.connection.once("connected", () => {
  cleanupIndexes();
});

const Reques_A_Call =
  mongoose.models?.Reques_A_Call ||
  mongoose.model("Reques_A_Call", request_a_call_schema);

export default Reques_A_Call;
