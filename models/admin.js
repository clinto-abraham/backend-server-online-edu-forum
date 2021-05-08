import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  contact: { type: Number, required: true },
  uniqueEmployeeID: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("Admin", adminSchema);