import mongoose from "mongoose";

const roomwithmsg = mongoose.Schema({
  room_name : String,
  messages : [{message: String,
    name: String,
    timestamp: String,
    received: Boolean}] 
});

export default mongoose.model('room',roomwithmsg);
