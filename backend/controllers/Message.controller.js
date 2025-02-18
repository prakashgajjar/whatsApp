const Conversation = require("../models/conversation.models.js");
const Message = require("../models/message.models.js");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.userId;

        if (!message || !receiverId || !senderId) {
            return res.status(400).json({ error: "All fields are required" });
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, receiverId],
                messages: [],
            });
            await conversation.save();
        }

        // Create and save the message with the required chat field
        const newMessage = new Message({
            sender: senderId,
            receiver: receiverId,
            chat: conversation._id, //  Linking message to conversation
            content: message, //  Using `content` instead of `message`
            messageType: "text",
        });

        await newMessage.save();

        conversation.messages.push(newMessage._id);
        await conversation.save();

        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = sendMessage;
