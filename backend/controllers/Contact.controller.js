const User = require('../models/user.models.js');

const contacts = async (req, res) => {
    try {
        const users = await User.find({});
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        const userData = users.map((user)=>{
            return {name: user.name, avatar: user.avatar , id : user._id}
        });
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = contacts;
