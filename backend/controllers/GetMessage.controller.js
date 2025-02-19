const Conversation = require("../models/conversation.models");
const Message = require("../models/message.models"); // Import Message Model

const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user.userId;

    // Find conversation between sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatUser] },
    });

    if (!conversation) {
      console.log("hello world");
      return res.status(200).json({ message: "Conversation not found" });
    }

    // Fetch messages linked to this conversation
    const messages = await Message.find({ chat: conversation._id }) 
      .populate("sender" ,"name" ) // Get sender's name
      .populate("receiver", "name") // Get receiver's name
      .sort({ createdAt: 1 }); // Sort messages by time
    console.log(messages); 
    res.status(200).json(messages);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getMessage;
