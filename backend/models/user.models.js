const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    lastSeen: Date,
    status: String,
    isOnline: Boolean,
    // conversations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'chat' }],
    // pendingFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // blockedFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', UserSchema);