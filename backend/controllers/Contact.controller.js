const User = require('../models/user.models.js')
const contacts = (req,res)=>{
    const users = User.find({})
    res.json({name : users.name , avtar: users.avatar  })
}

module.exports = contacts;