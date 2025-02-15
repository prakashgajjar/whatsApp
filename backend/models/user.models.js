const mongoose = require('mongoose')

const UserScahema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    lastSeen: Date,
    status: String,
    isOnline: Boolean,
    conversations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'chat' }],
    pendingFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    blockedFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{timeStamp: true})

export const User = mongoose.model('User',UserScahema);