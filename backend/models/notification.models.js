const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
  type: { type: String, enum: ["newMessage", "groupInvite"], default: "newMessage" },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

export const Notification = mongoose.model("Notification", NotificationSchema);
