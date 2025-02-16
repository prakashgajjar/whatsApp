const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  messageType: { type: String, enum: ["text", "image", "video"], default: "text" },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });


module.exports = mongoose.model("Message", MessageSchema);
