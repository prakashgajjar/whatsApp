const Conversation= require("../models/conversation.models");

const getMessage = async (req,res)=>{
try {
    
    const {id:chatUser} = req.params;
    const senderId = req.user.userId;
    const conversation = await Conversation.findOne({
        participants : { $all : [senderId , chatUser] }
    }).populate("messages");
    if(!conversation){
        console.log("hello world");
        return res.status(200).json({message: "Conversation not found"});
    }
    const messages = await conversation.messages;
    console.log(messages);
    res.status(200).json(messages);

} catch (error) {
    console.log(error.message);
}
}

module.exports = getMessage;