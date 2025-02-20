require("dotenv").config();
const MetaAiChat = async (req, res) => {

    try {
        const { GoogleGenerativeAI } = require("@google/generative-ai");
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = req.body.message;
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        res.status(200).json({
            message: result.response.text()
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Internal server error"
        })
    res.status(200).json({ message: "Meta AI chat response" })}
}


    module.exports = MetaAiChat;