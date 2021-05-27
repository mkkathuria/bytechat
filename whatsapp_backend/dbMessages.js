import mongoose from "mongoose";

const mychatappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
});

export default mongoose.model('mychatmessage',mychatappSchema);
